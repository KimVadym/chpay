import crypto from 'node:crypto';
import { supabase } from './_lib/supabase.js';

function json(statusCode, data) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
}

async function sendTelegramMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
    const secretKey = (process.env.TOSS_SECRET_KEY || '').trim();

    if (!secretKey) {
      return json(500, { error: 'TOSS_SECRET_KEY is missing' });
    }

    const body = JSON.parse(event.body || '{}');
    const { paymentKey, orderId, amount } = body;

    if (!paymentKey || !orderId || !amount) {
      return json(400, { error: 'Missing paymentKey, orderId or amount' });
    }

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('order_number', orderId)
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
        prepMinutes: order.prep_minutes,
        totalAmount: order.total_amount,
        items: order.items || [],
        estimatedReadyAt: order.estimated_ready_at,
      });
    }

    if (Number(amount) !== Number(order.total_amount)) {
      return json(400, {
        error: 'Amount mismatch',
        expected: Number(order.total_amount),
        received: Number(amount),
      });
    }

    const basicToken = Buffer.from(`${secretKey}:`).toString('base64');

    const confirmRes = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicToken}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': crypto.randomUUID(),
        'Accept-Language': 'en',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount: Number(amount),
      }),
    });

    const confirmText = await confirmRes.text();
    console.log('Toss confirm status:', confirmRes.status);
    console.log('Toss confirm body:', confirmText);

    let confirmData = {};
    try {
      confirmData = JSON.parse(confirmText);
    } catch {
      confirmData = { raw: confirmText };
    }

    if (!confirmRes.ok) {
      await supabase
        .from('orders')
        .update({
          status: 'payment_failed',
          payment_status: 'failed',
        })
        .eq('order_number', orderId);

      return json(confirmRes.status, {
        error: 'Toss confirm failed',
        details: confirmData,
      });
    }

    const { error: updateError } = await supabase
      .from('orders')
      .update({
        status: 'paid',
        payment_status: 'paid',
        approved_at: new Date().toISOString(),
        payment_provider: 'toss',
        toss_payment_key: paymentKey,
        toss_method: confirmData.method || 'CARD',
      })
      .eq('order_number', orderId);

    if (updateError) {
      return json(500, {
        error: 'Failed to update order',
        details: updateError.message,
      });
    }

    const itemsText = Array.isArray(order.items)
      ? order.items.map((item) => `${item.name} x${item.qty}`).join(', ')
      : '-';

    try {
      await sendTelegramMessage(
        [
          '✅ Новый оплаченный заказ CHPAY (Toss)',
          `Номер заказа: ${order.order_number}`,
          `Имя: ${order.customer_name}`,
          `Телефон: ${order.phone}`,
          `Получение: ${order.delivery_type}`,
          `Комментарий: ${order.comment || '-'}`,
          `Заказ: ${itemsText}`,
          `Сумма: ₩${Number(order.total_amount).toLocaleString('ko-KR')}`,
          `Статус: Оплачен`,
          `Время готовности: ${order.prep_minutes} мин`,
        ].join('\n')
      );
    } catch (tgError) {
      console.error('Telegram send failed:', tgError);
    }

    return json(200, {
      success: true,
      orderNumber: order.order_number,
      status: 'paid',
      paymentStatus: 'paid',
      prepMinutes: order.prep_minutes,
      totalAmount: order.total_amount,
      items: order.items || [],
      estimatedReadyAt: order.estimated_ready_at,
    });
  } catch (error) {
    console.error('confirm-toss-payment error:', error);
    return json(500, { error: error.message || 'Server error' });
  }
}