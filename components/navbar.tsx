"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react" // Не забудь импортировать иконку
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Flags from "./element/Flags"
import { ContactModal } from "./ContactModalForm"
import { useState } from "react"

export function NavbarSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navLinks = [
    { title: "О школе", href: "#schoolAbout" },
    { title: "Курсы", href: "#CourseSection" },
    { title: "Преподаватели", href: "#TeamSection" },
    { title: "Контакты", href: "#ContactSection" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#F9FBFF] backdrop-blur-sm">
      <div className="container mx-auto flex h-[50px] lg:h-[70px] items-center justify-between px-4 lg:px-6">
        {/* Логотип и Флаги */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/alias_logo.svg"
              alt="Alias Logo"
              width={75}
              height={27}
              priority
              className="w-[60px] lg:w-[75px]" // Чуть меньше на мобилках
            />
          </Link>

          {/* Группа флагов */}
          <Flags />
        </div>

        {/* ДЕСТОПНАЯ НАВИГАЦИЯ (скрыта на мобилках) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-extralight text-[24px] leading-[1.25] tracking-normal text-[#2D2D2D] hover:text-[#3366FF] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* ПРАВАЯ ЧАСТЬ: Кнопка и Мобильное меню */}
        <div className="flex items-center gap-2">
          {/* Кнопка (скрыта на совсем маленьких экранах, если мешает) */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:flex rounded-full bg-[#3366FF] hover:bg-[#2852E0] text-white px-5 lg:px-7 text-[14px] lg:text-[15px] font-semibold"
          >
            Записаться
          </Button>
          <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

          {/* МОБИЛЬНОЕ МЕНЮ (бургер) */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#2D2D2D] hover:bg-transparent">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-[350px] border-l-0 bg-[#F9FBFF] p-0 [&>button]:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Header внутри контента */}
                  <div className="p-6 flex items-center justify-between border-b bg-white">
                    <Image src="/alias_logo.svg" alt="Logo" width={70} height={25} />
                    <SheetClose className="rounded-full p-2 hover:bg-gray-100 transition-colors">
                      <X className="h-6 w-6 text-gray-500" />
                    </SheetClose>
                  </div>

                  {/* Список ссылок с отступами */}
                  <nav className="flex flex-col gap-2 p-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.title}>
                        <Link
                          href={link.href}
                          className="text-[22px] font-medium text-[#2D2D2D] py-4 px-2 rounded-xl hover:bg-[#3366FF]/5 hover:text-[#3366FF] transition-all active:bg-[#3366FF]/10"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Футер меню */}
                  <div className="mt-auto p-6 border-t bg-white">
                    <SheetClose asChild>
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full rounded-2xl bg-[#3366FF] py-7 text-lg font-bold shadow-md active:scale-[0.98] transition-transform"
                      >
                        Записаться
                      </Button>
                    </SheetClose>
                    <p className="text-center text-sm text-gray-400 mt-4">
                      г. Ставрополь, ул. 50 лет ВЛКСМ 109
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
