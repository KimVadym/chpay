import { supabase } from './_lib/supabase.js';

function json(statusCode, data) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
}

function sanitizePhone(phone = '') {
  return String(phone).replace(/[^\d+]/g, '').trim();
}

export async function handler(event) {
  const query = event.queryStringParameters || {};
  const orderNumber = query.orderNumber?.trim();
  const phone = sanitizePhone(query.phone || '');

  if (!orderNumber || !phone) {
    return json(400, { error: 'orderNumber and phone are required' });
  }

  const { data: order, error } = await supabase
    .from('orders')
    .select('order_number, customer_name, phone, items, total_amount, status, payment_status, prep_minutes, estimated_ready_at, delivery_type, created_at')
    .eq('order_number', orderNumber)
    .eq('phone', phone)
    .single();

  if (error || !order) {
    return json(404, { error: 'Заказ не найден' });
  }

  return json(200, { success: true, order });
}