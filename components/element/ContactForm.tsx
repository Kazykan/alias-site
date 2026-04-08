"use client"

import React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"

// Импорт базовых UI компонентов (убедись, что они установлены через shadcn)
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { handleContactForm } from "@/actions/contact"
import { toast } from "sonner"

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await handleContactForm(data)

      if (result.success) {
        toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
        form.reset()
      } else {
        toast.error(`Ошибка: ${result.error}`)
      }
    } catch (e) {
      toast.error("Что-то пошло не так. Пожалуйста, попробуйте позже.")
    }
  }

  // Общий стиль для контейнера поля с "плавающим" заголовком
  const FieldWrapper = ({ children, label, error, name }: any) => (
    <div className="relative mt-6 mb-2">
      <Label
        htmlFor={name}
        className={cn(
          "absolute left-4 -top-2.5 z-10 bg-white px-1.5 text-sm font-medium transition-all",
          error ? "text-destructive" : "text-[#16161699]",
        )}
      >
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-destructive text-[12px] mt-1 ml-4 font-light">{error.message}</p>
      )}
    </div>
  )

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Имя */}
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Ваше имя" error={fieldState.error} name="name">
            <Input
              {...field}
              id="name"
              placeholder="Иван Иванов"
              className="h-14 rounded-2xl border-[#E2E8F0] focus-visible:ring-[#0066FF]"
              aria-invalid={fieldState.invalid}
            />
          </FieldWrapper>
        )}
      />

      {/* Email */}
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Электронная почта" error={fieldState.error} name="email">
            <Input
              {...field}
              id="email"
              type="email"
              placeholder="example@mail.ru"
              className="h-14 rounded-2xl border-[#E2E8F0] focus-visible:ring-[#0066FF]"
              aria-invalid={fieldState.invalid}
            />
          </FieldWrapper>
        )}
      />

      {/* Телефон */}
      <Controller
        name="phone"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Телефон" error={fieldState.error} name="phone">
            <Input
              {...field}
              id="phone"
              placeholder="+7 (999) 000-00-00"
              className="h-14 rounded-2xl border-[#E2E8F0] focus-visible:ring-[#0066FF]"
              aria-invalid={fieldState.invalid}
            />
          </FieldWrapper>
        )}
      />

      {/* Выбор курса */}
      <Controller
        name="course"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Интересующий курс" error={fieldState.error} name="course">
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger
                className="w-full h-12 !h-12 rounded-2xl border-[#E2E8F0] focus:ring-[#0066FF]"
                aria-invalid={fieldState.invalid}
              >
                <SelectValue placeholder="Выберите программу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">Английский язык</SelectItem>
                <SelectItem value="french">Французский язык</SelectItem>
                <SelectItem value="spanish">Испанский язык</SelectItem>
                <SelectItem value="exams">Подготовка к ЕГЭ</SelectItem>
              </SelectContent>
            </Select>
          </FieldWrapper>
        )}
      />

      {/* Сообщение */}
      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Ваше сообщение" error={fieldState.error} name="message">
            <Textarea
              {...field}
              id="message"
              placeholder="Дополнительная информация"
              className="min-h-[120px] rounded-2xl border-[#E2E8F0] focus-visible:ring-[#0066FF] pt-4"
              aria-invalid={fieldState.invalid}
            />
          </FieldWrapper>
        )}
      />

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white h-14 rounded-full text-lg font-medium transition-all mt-4"
      >
        {form.formState.isSubmitting ? "Отправка..." : "Записаться"}
      </Button>
    </form>
  )
}
