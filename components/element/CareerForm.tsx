"use client"

import React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { careerFormSchema, type CareerFormValues } from "@/lib/validations/career"
import { handleCareerForm } from "@/actions/career"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function CareerForm() {
  const form = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: { name: "", email: "", phone: "", vacancy: "teacher", message: "" },
  })

  const onSubmit = async (data: CareerFormValues) => {
    const result = await handleCareerForm(data)
    if (result.success) {
      toast.success("Заявка принята!", {
        description: "Мы свяжемся с вами в ближайшее время.",
      })
      form.reset()
    } else {
      toast.error("Ошибка при отправке", {
        description: result.error,
      })
    }
  }

  const FieldWrapper = ({ children, label, error, name }: any) => (
    <div className="relative mt-6">
      <Label
        htmlFor={name}
        className={cn(
          "absolute left-4 -top-2.5 z-10 bg-white px-1.5 text-sm font-medium",
          error ? "text-destructive" : "text-[#16161699]",
        )}
      >
        {label}
      </Label>
      {children}
      {error && <p className="text-destructive text-[12px] mt-1 ml-4">{error.message}</p>}
    </div>
  )

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Ваше имя" error={fieldState.error} name="name">
            <Input {...field} className="h-14 rounded-2xl border-[#E2E8F0]" />
          </FieldWrapper>
        )}
      />
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Электронная почта" error={fieldState.error} name="email">
            <Input
              {...field}
              type="email"
              placeholder="example@mail.ru"
              className="h-14 rounded-2xl border-[#E2E8F0]"
            />
          </FieldWrapper>
        )}
      />
      <Controller
        name="phone"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Телефон" error={fieldState.error} name="phone">
            <Input {...field} placeholder="+7" className="h-14 rounded-2xl border-[#E2E8F0]" />
          </FieldWrapper>
        )}
      />

      <Controller
        name="vacancy"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="Кем вы хотите работать?" error={fieldState.error} name="vacancy">
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full h-14 !h-14 rounded-2xl border-[#E2E8F0]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher">Преподаватель</SelectItem>
                <SelectItem value="admin">Администратор</SelectItem>
              </SelectContent>
            </Select>
          </FieldWrapper>
        )}
      />

      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldWrapper label="О себе / Ссылка на резюме" error={fieldState.error} name="message">
            <Textarea {...field} className="min-h-[100px] rounded-2xl border-[#E2E8F0] pt-4" />
          </FieldWrapper>
        )}
      />

      <Button
        type="submit"
        className="w-full bg-[#0066FF] hover:bg-[#0052CC] h-14 rounded-full text-lg font-medium mt-4 transition-all"
      >
        {form.formState.isSubmitting ? "Отправка..." : "Отправить резюме"}
      </Button>
    </form>
  )
}
