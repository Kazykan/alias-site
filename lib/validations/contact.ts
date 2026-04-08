import * as z from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя слишком короткое" })
    .max(50, { message: "Имя слишком длинное" }),

  email: z.string().email({ message: "Некорректный email адрес" }),

  phone: z.string().min(10, { message: "Введите полный номер телефона" }),

  course: z.string().min(1, { message: "Пожалуйста, выберите курс" }),

  message: z
    .string()
    .max(500, { message: "Сообщение слишком длинное" })
    .optional()
    .or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
