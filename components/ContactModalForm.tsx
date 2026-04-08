import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./element/ContactForm"

interface ContactModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] rounded-[30px] p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Заявка на обучение</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Заполните форму для подачи заявки на обучение в нашу школу.
        </DialogDescription>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
