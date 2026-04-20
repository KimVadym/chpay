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

function makeOrderNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `CH-${y}${m}${d}-${random}`;
}

function sanitizePhone(phone = '') {
  return String(phone).replace(/[^\d+]/g, '').trim();
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const {
      customerName,
      phone,
      deliveryType = 'Самовывоз',
      comment = '',
      items = [],
      totalAmount,
    } = body;

    const cleanPhone = sanitizePhone(phone);

    if (!customerName?.trim()) {
      return json(400, { error: 'Введите имя' });
    }

    if (!cleanPhone) {
      return json(400, { error: 'Введите телефон' });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return json(400, { error: 'Корзина пуста' });
    }

    if (!Number.isFinite(Number(totalAmount)) || Number(totalAmount) <= 0) {
      return json(400, { error: 'Неверная сумма заказа' });
    }

    const secretKey = process.env.KAKAOPAY_SECRET_KEY;
    const cid = process.env.KAKAOPAY_CID || 'TC0ONETIME';
    const siteUrl = process.env.SITE_URL || 'https://choyhona.netlify.app';
    const defaultPrepMinutes = Number(process.env.DEFAULT_PREP_MINUTES || 35);

    if (!secretKey) {
      return json(500, { error: 'KAKAOPAY_SECRET_KEY is missing' });
    }

    const orderNumber = makeOrderNumber();
    const partnerUserId = `guest_${Date.now()}`;
    const estimatedReadyAt = new Date(
      Date.now() + defaultPrepMinutes * 60 * 1000
    ).toISOString();

    const { error: insertError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        customer_name: customerName.trim(),
        phone: cleanPhone,
        delivery_type: deliveryType,
        comment,
        items,
        total_amount: Number(totalAmount),
        currency: 'KRW',
        status: 'pending_payment',
        payment_status: 'pending',
        prep_minutes: defaultPrepMinutes,
        estimated_ready_at: estimatedReadyAt,
        partner_user_id: partnerUserId,
      });

    if (insertError) {
      return json(500, {
        error: 'Failed to save order',
        details: insertError.message,
      });
    }

    const itemName =
      items.length === 1
        ? items[0].name
        : `${items[0].name} 외 ${items.length - 1}건`;

    const readyPayload = {
      cid,
      partner_order_id: orderNumber,
      partner_user_id: partnerUserId,
      item_name: itemName,
      quantity: 1,
      total_amount: Number(totalAmount),
      tax_free_amount: 0,
      approval_url: `${siteUrl}/success.html?order=${encodeURIComponent(orderNumber)}`,
      cancel_url: `${siteUrl}/cancel.html?order=${encodeURIComponent(orderNumber)}`,
      fail_url: `${siteUrl}/fail.html?order=${encodeURIComponent(orderNumber)}`,
    };

    const kakaoResponse = await fetch(
      'https://open-api.kakaopay.com/online/v1/payment/ready',
      {
        method: 'POST',
        headers: {
          Authorization: `SECRET_KEY ${secretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(readyPayload),
      }
    );

    const kakaoData = await kakaoResponse.json();

    if (!kakaoResponse.ok) {
      await supabase
        .from('orders')
        .update({ status: 'payment_failed' })
        .eq('order_number', orderNumber);

      return json(kakaoResponse.status, {
        error: 'KakaoPay ready failed',
        details: kakaoData,
      });
    }

    const { error: updateError } = await supabase
      .from('orders')
      .update({ kakaopay_tid: kakaoData.tid })
      .eq('order_number', orderNumber);

    if (updateError) {
      return json(500, {
        error: 'Failed to update TID',
        details: updateError.message,
      });
    }

    return json(200, {
      success: true,
      orderNumber,
      redirectUrl: kakaoData.next_redirect_pc_url || kakaoData.next_redirect_mobile_url,
    });
  } catch (error) {
    return json(500, { error: error.message });
  }
}


/=========================================/ 
try {
  const response = await fetch('https://open-api.kakaopay.com/online/v1/payment/ready', {
    method: 'POST',
    headers: {
      Authorization: `SECRET_KEY ${process.env.KAKAOPAY_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  console.log('KakaoPay ready status:', response.status);
  console.log('KakaoPay ready body:', text);

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({
        error: 'KakaoPay ready failed',
        details: text,
      }),
    };
  }

  return {
    statusCode: 200,
    body: text,
  };
} catch (err) {
  console.error('KakaoPay ready exception:', err);
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: 'KakaoPay ready failed',
      details: err.message,
    }),
  };
}