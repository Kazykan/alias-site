"use server"

import { careerFormSchema, type CareerFormValues } from "@/lib/validations/career"
import { sendToTelegram } from "@/lib/services/telegram"
import { sendToEmail } from "@/lib/services/email"

export async function handleCareerForm(values: CareerFormValues) {
  const validatedFields = careerFormSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Некорректные данные" }
  }

  const { name, email, phone, vacancy, message } = validatedFields.data
  const vacancyName = vacancy === "teacher" ? "Преподаватель" : "Администратор"

  const text = `
<b>💼 Новый отклик на вакансию: ${vacancyName}</b>
👤 Соискатель: ${name}
📞 Тел: ${phone}
📧 Email: ${email}
💬 Сообщение: ${message || "нет"}
  `

  try {
    await Promise.allSettled([
      sendToTelegram(text),
      sendToEmail({
        subject: `Резюме: ${name} (${vacancyName})`,
        html: text.replace(/\n/g, "<br>"),
      }),
    ])

    return { success: true }
  } catch (err) {
    return { error: "Ошибка отправки" }
  }
}
