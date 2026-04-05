import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F5F8FF]">
      {/* 1. ФОНОВЫЙ СЛОЙ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute transition-all duration-700 ease-in-out
               /* Мобильные параметры */
               w-[243px] h-[546px] top-[30px] right-[-100px]
               /* Планшеты/Десктоп (lg) */
               lg:w-[686px] lg:h-[1092px] lg:top-[50px] lg:right-[-100px]"
          style={
            {
              // Используем CSS переменные для адаптивного трансформа
              // На мобилках (по умолчанию) смещаем меньше, на lg — больше
              transform: "translate(var(--tw-translateX), var(--tw-translateY))",
              "--tw-translateX": "-100px", // sm
              "--tw-translateY": "-150px", // sm
            } as React.CSSProperties
          }
        >
          <img
            src="/line_white.svg"
            alt=""
            className="w-full h-full object-contain opacity-100 
                 /* Переопределяем переменные для десктопа через классы */
                 lg:[--tw-translateX:-300px] lg:[--tw-translateY:-200px]"
          />
        </div>
      </div>

      {/* 2. КОНТЕНТНЫЙ СЛОЙ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-20 pt-4 pb-10 lg:pb-20">
        {/* Логотип */}
        <div className="w-[60px] h-[60px] lg:w-[151px] lg:h-[151px] flex items-center justify-center">
          <Image
            src="/logo_icon.svg"
            alt="Logo"
            width={151}
            height={151}
            priority
            className="w-full h-full"
          />
        </div>

        {/* Заголовок */}
        <div className="max-w-[1100px] mt-6 lg:mt-0 mb-8 lg:mb-12">
          <h1 className="font-['Geologica'] font-normal text-[28px] sm:text-[clamp(32px,10vw,112.29px)] leading-[1.1] lg:leading-[1.05] tracking-tight text-black">
            Изучай языки <br />
            <span className="text-[#0066FF]">с профессионалами</span>
          </h1>

          <p className="mt-4 lg:mt-8 font-['Geologica'] font-extralight text-[16px] lg:text-[24px] leading-relaxed lg:leading-[1.25] text-[#47484D] max-w-[650px]">
            Современная языковая школа с опытными преподавателями и индивидуальным подходом.
            Английский, французский и испанский языки для всех уровней.
          </p>
        </div>

        {/* Карточки языков */}
        <div className="flex flex-wrap gap-4 lg:gap-8 mb-10 lg:mb-16">
          {[
            { name: "Французский", level: "от А1, до С1", flag: "/france_flag.png" },
            { name: "Английский", level: "от А1, до С2", flag: "/usa_flag.png" },
            { name: "Испанский", level: "от А1, до С1", flag: "/spain_flag.png" },
          ].map((item) => (
            <div
              key={item.name}
              className="w-full md:w-[405px] h-[140px] lg:h-[185px] bg-[#ECF2FF] rounded-[30px] lg:rounded-[45px] shadow-[0px_4px_13.9px_0px_#47484D17] flex items-center px-6 lg:px-10 gap-4 lg:gap-6 transition-all hover:translate-y-[-5px]"
            >
              <div className="relative w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] flex-shrink-0">
                <Image
                  src={item.flag}
                  alt={item.name}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Geologica'] font-medium text-[20px] lg:text-[24px] text-black leading-tight">
                  {item.name}
                </span>
                <span className="font-['Geologica'] font-light text-[14px] lg:text-[16px] text-[#47484D] opacity-60">
                  {item.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-24">
          <Button className="w-full sm:w-auto h-[60px] lg:h-[72px] px-8 lg:px-10 bg-[#0066FF] hover:bg-[#0052CC] rounded-full text-[16px] lg:text-[18px] font-medium font-['Geologica']">
            Записаться на пробное занятие
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto h-[60px] lg:h-[72px] px-8 lg:px-10 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/5 rounded-full text-[16px] lg:text-[18px] font-medium font-['Geologica']"
          >
            Узнать подробнее
          </Button>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 bg-white/40 backdrop-blur-xl border border-white/20 rounded-[30px] lg:rounded-[45px] p-6 lg:p-10 shadow-sm">
          {[
            { val: "800+", label: "выпускников" },
            { val: "6+", label: "лет работы" },
            { val: "4", label: "преподавателя" },
            { val: "95%", label: "сдают экзамены" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center lg:border-r last:border-0 border-gray-200/50"
            >
              <span className="font-['Geologica'] font-bold text-[28px] lg:text-[40px] text-[#0066FF] leading-none mb-2">
                {stat.val}
              </span>
              <span className="font-['Geologica'] font-light text-[12px] lg:text-[14px] uppercase tracking-wider text-[#47484D]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
