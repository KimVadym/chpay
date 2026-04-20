// =====================================================
// NETLIFY FUNCTION
// Эта функция принимает заказ с сайта
// и отправляет его в Telegram через бота
// =====================================================

exports.handler = async function (event) {
  // Разрешаем только POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    // Получаем тело запроса
    const body = JSON.parse(event.body);

    const {
      customerName,
      customerPhone,
      comment,
      deliveryType,
      items,
      total
    } = body;

    // Переменные окружения из Netlify
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Проверяем, что они есть
    if (!token || !chatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing Telegram environment variables" })
      };
    }

    // Названия способов получения
    const deliveryMap = {
      pickup: "Самовывоз",
      hall: "В зал / к столу",
      delivery: "Доставка"
    };

    // Формируем строки заказа
    const orderLines = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} — ${item.qty} x ₩${Number(item.price).toLocaleString("ko-KR")}`
      )
      .join("\n");

    // Финальный текст сообщения в Telegram
    const text = [
      "🍽 Новый заказ из Chaikhona",
      "",
      `👤 Имя: ${customerName || "-"}`,
      `📞 Телефон: ${customerPhone || "-"}`,
      `🚚 Способ получения: ${deliveryMap[deliveryType] || "-"}`,
      `📝 Комментарий: ${comment || "-"}`,
      "",
      "📋 Заказ:",
      orderLines,
      "",
      `💰 Итого: ₩${Number(total).toLocaleString("ko-KR")}`
    ].join("\n");

    // Отправка сообщения в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text
        })
      }
    );

    const telegramData = await telegramResponse.json();

    // Если Telegram вернул ошибку
    if (!telegramData.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Telegram API error", details: telegramData })
      };
    }

    // Всё успешно
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    // Ловим любые ошибки
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};