import Image from "next/image"
import { BlurCard, FeatureProps } from "./element/BlurCard"

const joinFeatures: FeatureProps[] = [
  {
    emoji: "🎓",
    first_title: "Требования",
    desc: "Высшее образование, опыт преподавания, международные сертификаты",
  },
  {
    emoji: "💰",
    first_title: "Условия",
    desc: "Конкурентная зарплата, гибкий график, дружный коллектив",
  },
  {
    emoji: "📈",
    first_title: "Развитие",
    desc: "Повышение квалификации, методическая поддержка, карьерный рост",
  },
]

export default function JoinTeamSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-[#F5F8FF]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        {/* Основной синий блок */}
        <div className="relative w-full bg-[#2E66F6] rounded-[34px] p-6 lg:p-12 overflow-hidden shadow-xl">
          {/* Header блока */}
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-white text-[24px] lg:text-[40px] font-semibold leading-tight">
                Присоединись к нашей команде
              </h2>
              {/* Твой логотип icon */}
              <div className="relative w-[21px] h-[21px] shrink-0">
                <Image src="/logo_icon.svg" alt="Alias Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-white/80 text-[14px] lg:text-[18px] max-w-[800px] font-light">
              Мы всегда рады видеть в нашей команде талантливых преподавателей с опытом работы и
              желанием развиваться
            </p>
          </div>

          {/* Сетка карточек BlurCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 lg:mb-12">
            {joinFeatures.map((item, i) => (
              <BlurCard key={i} feature={item} />
            ))}
          </div>

          {/* Кнопка "Отправить резюме" */}
          <button className="w-full bg-white text-[#2E66F6] py-5 lg:py-6 rounded-[24px] lg:rounded-[30px] font-semibold text-[18px] lg:text-[22px] transition-all hover:bg-[#F0F5FF] active:scale-[0.98] shadow-md">
            Отправить резюме
          </button>

          {/* Легкий декоративный блик (как на макете) */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
