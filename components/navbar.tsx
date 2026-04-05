"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react" // Не забудь импортировать иконку
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const navLinks = [
    { title: "О школе", href: "#" },
    { title: "Курсы", href: "#" },
    { title: "Преподаватели", href: "#" },
    { title: "Контакты", href: "#" },
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
          <div className="flex -space-x-2 lg:-space-x-2">
            {[
              { src: "/usa_flag.png", z: "z-[10]" },
              { src: "/spain_flag.png", z: "z-[5]" },
              { src: "/france_flag.png", z: "z-[1]" },
            ].map((flag, i) => (
              <div
                key={i}
                className={`relative size-6 lg:size-8 overflow-hidden rounded-[6px] lg:rounded-[10px] shadow-flag ${flag.z}`}
              >
                <Image src={flag.src} alt="Flag" fill className="object-cover" />
              </div>
            ))}
          </div>
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
          <Button className="hidden sm:flex rounded-full bg-[#3366FF] hover:bg-[#2852E0] text-white px-5 lg:px-7 text-[14px] lg:text-[15px] font-semibold">
            Записаться
          </Button>

          {/* МОБИЛЬНОЕ МЕНЮ (бургер) */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#2D2D2D]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    {" "}
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
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="text-lg font-medium text-[#2D2D2D] hover:text-[#3366FF] border-b pb-2"
                    >
                      {link.title}
                    </Link>
                  ))}
                  <Button className="rounded-full bg-[#3366FF] mt-4 w-full py-6 text-lg">
                    Записаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
