"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { BlurCard } from "./element/blur_card"
import TeacherAvatar from "./element/TeacherAvatar"

const features = [
  {
    first_title: "Инновационные",
    title: "методы",
    desc: "Современные подходы к обучению",
    emoji: "💡", // Та же иконка для фона
  },
  {
    first_title: "Мировые",
    title: "стандарты",
    desc: "Соответствие международным требованиям",
    emoji: "🌍",
  },
  {
    first_title: "Поддержка",
    title: "студентов",
    desc: "Индивидуальное сопровождение",
    emoji: "🤝",
  },
  {
    first_title: "Актуальные",
    title: "материалы",
    desc: "Современные учебные ресурсы",
    emoji: "📚",
  },
]

export default function ShoolAbout() {
  return (
    <section className="w-full bg-[#F5F8FF] py-10 lg:py-14 font-['Geologica'] overflow-hidden">
      {/* Контейнер с общими отступами страницы */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        {/* Заголовок блока (тот же) */}
        <h2 className="text-[32px] lg:text-[56px] font-medium text-black mb-4 lg:mb-6">
          О школе <span className="text-[#0066FF]">Элиас</span>
        </h2>
        <p className="mt-2 lg:mt-8 font-['Geologica'] font-extralight text-[16px] lg:text-[24px] leading-relaxed lg:leading-[1.25] opacity-60 text-[#16161699] max-w-[1250px]">
          Современная языковая школа с индивидуальным подходом к каждому студенту. Мы
          специализируемся на английском, французском и испанском языках, а также готовим к
          международным экзаменам. Мы создаем комфортную образовательную среду, где каждый студент
          может раскрыть свой потенциал и достичь поставленных целей в изучении иностранных языков.
        </p>

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
