import * as z from "zod"

export const careerFormSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  email: z.string().email("Некорректный email"),
  phone: z.string().min(10, "Введите номер телефона"),
  vacancy: z.enum(["teacher", "admin"]).refine((v) => v, { message: "Выберите вакансию" }),
  message: z.string().max(1000, "Слишком длинное сообщение").optional().or(z.literal("")),
})

export type CareerFormValues = z.infer<typeof careerFormSchema>
