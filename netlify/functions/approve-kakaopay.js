import { supabase } from './_lib/supabase.js';

function json(statusCode, data) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
}

async function sendTelegramMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { orderNumber, pgToken, pg_token } = body;
    const finalPgToken = pgToken || pg_token;

    if (!orderNumber || !finalPgToken) {
      return json(400, { error: 'Missing orderNumber or pgToken' });
    }

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('order_number', orderNumber)
      .single();

    if (orderError || !order) {
      return json(404, { error: 'Order not found' });
    }

    if (order.payment_status === 'paid') {
      return json(200, {
        success: true,
        orderNumber: order.order_number,
        status: order.status,
        paymentStatus: order.payment_status,
      });
    }

    if (!order.kakaopay_tid) {
      return json(400, { error: 'Missing KakaoPay TID for this order' });
    }

    const secretKey = process.env.KAKAOPAY_SECRET_KEY;
    const cid = process.env.KAKAOPAY_CID || 'TC0ONETIME';

    if (!secretKey) {
      return json(500, { error: 'KAKAOPAY_SECRET_KEY is missing' });
    }

    const approveResponse = await fetch(
      'https://open-api.kakaopay.com/online/v1/payment/approve',
      {
        method: 'POST',
        headers: {
          Authorization: `SECRET_KEY ${secretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cid,
          tid: order.kakaopay_tid,
          partner_order_id: order.order_number,
          partner_user_id: order.partner_user_id,
          pg_token: finalPgToken,
        }),
      }
    );

    const approveText = await approveResponse.text();
    console.log('KakaoPay approve status:', approveResponse.status);
    console.log('KakaoPay approve body:', approveText);

    let approveData = {};
    try {
      approveData = JSON.parse(approveText);
    } catch {
      approveData = { raw: approveText };
    }

    if (!approveResponse.ok) {
      await supabase
        .from('orders')
        .update({
          status: 'payment_failed',
          payment_status: 'failed',
        })
        .eq('order_number', order.order_number);

      return json(approveResponse.status, {
        error: 'KakaoPay approve failed',
        details: approveData,
      });
    }

    const approvedAt = approveData.approved_at || new Date().toISOString();

    const { error: updateError } = await supabase
      .from('orders')
      .update({
        status: 'paid',
        payment_status: 'paid',
        approved_at: approvedAt,
      })
      .eq('order_number', order.order_number);

    if (updateError) {
      return json(500, {
        error: 'Failed to update order',
        details: updateError.message,
      });
    }

    const itemsText = Array.isArray(order.items)
      ? order.items.map((item) => `${item.name} x${item.qty}`).join(', ')
      : '-';

    const telegramText = [
      '✅ Новый оплаченный заказ Chaikhona',
      `Номер заказа: ${order.order_number}`,
      `Имя: ${order.customer_name}`,
      `Телефон: ${order.phone}`,
      `Получение: ${order.delivery_type}`,
      `Комментарий: ${order.comment || '-'}`,
      `Заказ: ${itemsText}`,
      `Сумма: ₩${Number(order.total_amount).toLocaleString('ko-KR')}`,
      `Статус: Оплачен`,
      `Время готовности: ${order.prep_minutes} мин`,
    ].join('\n');

    try {
      await sendTelegramMessage(telegramText);
    } catch (tgError) {
      console.error('Telegram send failed:', tgError);
    }

    return json(200, {
      success: true,
      orderNumber: order.order_number,
      status: 'paid',
      paymentStatus: 'paid',
      estimatedReadyAt: order.estimated_ready_at,
      prepMinutes: order.prep_minutes,
    });
  } catch (error) {
    console.error('approve-kakaopay error:', error);
    return json(500, { error: error.message || 'Server error' });
  }
}