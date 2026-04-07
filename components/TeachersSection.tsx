"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { BlurCard } from "./element/BlurCard"
import TeacherAvatar from "./element/TeacherAvatar"

const teachers = [
  {
    name: "Софья Я.",
    img: "/teacher-sofiya-profile.png",
  },
  {
    name: "Анна Т.",
    img: "/teacher-anna-profile.png",
  },
  {
    name: "Алия К.",
    img: "/teacher-aliay-profile.png",
  },
  {
    name: "Евгения В.",
    img: "/teacher-evgeniya-profile.png",
  },
]

const features = [
  {
    first_title: "Индивидуальный",
    title: "подход",
    desc: "Программы адаптированы под ваши цели и уровень",
    emoji: "🎯", // Та же иконка для фона
  },
  {
    first_title: "Высокие",
    title: "результаты",
    desc: "95% студентов успешно сдают экзамены",
    emoji: "🏆",
  },
  {
    first_title: "Современные",
    title: "методики",
    desc: "Интерактивные уроки и актуальные материалы",
    emoji: "⚡",
  },
]

export default function TeachersSection() {
  return (
    <section className="w-full bg-[#F5F8FF] py-16 lg:py-24 font-['Geologica'] overflow-hidden">
      {/* Контейнер с общими отступами страницы */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        {/* Заголовок блока (тот же) */}
        <h2 className="text-[32px] lg:text-[56px] font-medium text-black mb-12 lg:mb-16">
          Наши <span className="text-[#0066FF]">преподаватели</span>
        </h2>

        {/* Сетка преподавателей (та же) */}
        <div className="flex flex-wrap items-center gap-6 lg:gap-10 mb-16 lg:mb-24">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col items-center group">
              <TeacherAvatar teacher={teacher} />
              <div className="bg-[#0066FF] text-white px-6 py-2 rounded-full text-[14px] lg:text-[18px] font-medium">
                {teacher.name}
              </div>
            </div>
          ))}

          {/* Кнопка "Далее/Вниз" */}
          <button className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0066FF] rounded-full flex items-center justify-center text-white hover:bg-[#0052CC] transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>

        {/* Карточки преимуществ с реализацией фоновых EMOJI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <BlurCard key={i} feature={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
