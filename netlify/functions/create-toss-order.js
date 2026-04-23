import { supabase } from './_lib/supabase.js';

function json(statusCode, data) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
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

function getItemName(name) {
  if (typeof name === 'string') return name;
  if (name && typeof name === 'object') {
    return name.ru || name.en || name.kr || 'Item';
  }
  return 'Item';
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

    const normalizedItems = items.map((item) => ({
      id: item?.id ?? null,
      name: getItemName(item?.name),
      qty: Number(item?.qty || 0),
      price: Number(item?.price || 0),
    }));

    const orderNumber = makeOrderNumber();
    const estimatedReadyAt = new Date(Date.now() + 35 * 60 * 1000).toISOString();

    const { error: insertError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        customer_name: customerName.trim(),
        phone: cleanPhone,
        delivery_type: deliveryType,
        comment,
        items: normalizedItems,
        total_amount: Number(totalAmount),
        currency: 'KRW',
        status: 'pending_payment',
        payment_status: 'pending',
        prep_minutes: 35,
        estimated_ready_at: estimatedReadyAt,
        payment_provider: 'toss',
      });

    if (insertError) {
      return json(500, {
        error: 'Failed to save order',
        details: insertError.message,
      });
    }

    const firstItemName = normalizedItems[0]?.name || 'Item';

    const orderName =
      normalizedItems.length === 1
        ? firstItemName
        : `${firstItemName} 외 ${normalizedItems.length - 1}건`;

    return json(200, {
      success: true,
      orderNumber,
      totalAmount: Number(totalAmount),
      orderName,
    });
  } catch (error) {
    console.error('create-toss-order error:', error);
    return json(500, { error: error.message || 'Server error' });
  }
}