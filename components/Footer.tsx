"use client"

import Image from "next/image"
import Link from "next/link"
import Flags from "./element/Flags"

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg text-footer-text py-16 lg:py-20 font-geologica">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Колонка 1: Логотип и описание */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              {/* Поменяй src на свой путь к лого */}
              <div className="flex items-center gap-3 lg:gap-4">
                <Image
                  src="/logo-footer.png"
                  alt="Alias School"
                  width={80}
                  height={60}
                />
                <Flags />
              </div>
            </Link>
            <p className="text-footer-muted text-[15px] leading-relaxed max-w-[280px]">
              Языковая школа Alias — ваш надежный партнер в изучении английского, французского и
              испанского языков.
            </p>
          </div>

          {/* Колонка 2: Курсы */}
          <div>
            <h4 className="text-xl font-bold mb-6">Курсы</h4>
            <ul className="flex flex-col gap-4 text-footer-muted text-[15px]">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Английский язык
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Французский язык
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Испанский язык
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Подготовка к ЕГЭ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  YLE Cambridge
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  DELE
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Подростковые программы
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: О школе */}
          <div>
            <h4 className="text-xl font-bold mb-6">О школе</h4>
            <ul className="flex flex-col gap-4 text-footer-muted text-[15px]">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Методика
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="text-xl font-bold mb-6">Контакты</h4>
            <div className="flex flex-col gap-5 text-footer-muted text-[15px]">
              <div>
                <span className="block text-white font-semibold">Адрес:</span>
                г. Ставрополь, ул. 50 лет ВЛКСМ, д. 109, оф. 304А
              </div>
              <div>
                <span className="block text-white font-semibold">Телефон:</span>
                <a href="tel:+79991234567" className="hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div>
                <span className="block text-white font-semibold">Email:</span>
                <a
                  href="mailto:info@alias-school.ru"
                  className="hover:text-white transition-colors"
                >
                  info@alias-school.ru
                </a>
              </div>
              <div>
                <span className="block text-white font-semibold">Режим работы:</span>
                Пн-Пт: 9:00 - 21:00
                <br />
                Сб-Вс: 10:00 - 18:00
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-footer-muted text-sm">
          <p>© 2025 Языковая школа Alias. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
