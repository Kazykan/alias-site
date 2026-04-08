import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailProps {
  subject: string
  html: string
}

export async function sendToEmail({ subject, html }: SendEmailProps) {
  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: [process.env.EMAIL_TO as string],
      subject: subject,
      html: html,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Resend Error:", error)
    return { success: false, error }
  }
}
