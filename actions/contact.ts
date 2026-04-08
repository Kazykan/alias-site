"use server"

import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact"
import { sendToTelegram } from "@/lib/services/telegram"
import { sendToEmail } from "@/lib/services/email"

export async function handleContactForm(values: ContactFormValues) {
  // 1. Валидация данных на сервере
  const validatedFields = contactFormSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Некорректные данные формы" }
  }

  const { name, email, phone, course, message } = validatedFields.data

  // 2. Форматируем контент (HTML для почты и Plain text для ТГ)
  const emailHtml = `
    <h2>Новая заявка с сайта ${process.env.SITE_DOMEN}</h2>
    <p><b>Имя:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Телефон:</b> ${phone}</p>
    <p><b>Курс:</b> ${course}</p>
    <p><b>Сообщение:</b> ${message || "Не указано"}</p>
  `

  const tgText = `
<b>🚀 Новая заявка с сайта: ${process.env.SITE_DOMEN}</b>
👤 <b>Имя:</b> ${name}
📞 <b>Тел:</b> ${phone}
📚 <b>Курс:</b> ${course}
📧 <b>Email:</b> ${email}
💬 <b>Сообщение:</b> ${message || "-"}
  `

  try {
    // 3. Параллельная отправка во все каналы
    // Используем Promise.allSettled, чтобы сбой в ТГ не мешал отправке почты
    const results = await Promise.allSettled([
      sendToTelegram(tgText),
      sendToEmail({
        subject: `Заявка от ${name} (${course})`,
        html: emailHtml,
      }),
    ])

    // Логируем ошибки в консоль сервера для отладки
    results.forEach((result, idx) => {
      if (result.status === "rejected") {
        console.error(`Service ${idx} failed:`, result.reason)
      }
    })

    return { success: true }
  } catch (err) {
    console.error("Global Action Error:", err)
    return { error: "Произошла ошибка при обработке заявки" }
  }
}
