"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CareerForm } from "./element/CareerForm"
import { DialogDescription } from "@radix-ui/react-dialog"

interface CareerModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function CareerModal({ isOpen, setIsOpen }: CareerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] rounded-[30px] p-6 lg:p-10 border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl lg:text-3xl font-bold text-center mb-4">
            Работа в <span className="text-[#0066FF]">Alias</span>
          </DialogTitle>
          <DialogDescription>
            Заполните форму для подачи заявки на вакансию в нашу школу.
          </DialogDescription>
        </DialogHeader>
        <CareerForm />
      </DialogContent>
    </Dialog>
  )
}
