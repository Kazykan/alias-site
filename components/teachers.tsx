import Image from "next/image"
import { ArrowDown } from "lucide-react"

// Учителя (те же)
const teachers = [
  { name: "Софья Я.", img: "/teacher-sofiya.png" }, // Замените на ваши пути к фото
  { name: "Анна Т.", img: "/teacher-anna.png" },
  { name: "Алия К.", img: "/teacher-aliay.png" },
  { name: "Евгения В.", img: "/teacher-evgeniya.png" },
]

// Данные преимуществ с Unicode Emoji
const features = [
  {
    title: "Индивидуальный подход",
    desc: "Программы адаптированы под ваши цели и уровень",
    emoji: "🎯", // Та же иконка для фона
  },
  {
    title: "Высокие результаты",
    desc: "95% студентов успешно сдают экзамены",
    emoji: "🏆",
  },
  {
    title: "Современные методики",
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
              <div className="relative w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-white shadow-sm overflow-hidden mb-4 transition-transform group-hover:scale-105">
                <Image src={teacher.img} alt={teacher.name} fill className="object-cover" />
              </div>
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
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-white/60 backdrop-blur-md rounded-[30px] lg:rounded-[40px] p-4 lg:p-10 shadow-[0px_4px_15px_rgba(71,72,77,0.05)] border border-white"
            >
              {/* Контентный слой: четкий emoji и текст */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-4xl mb-4 leading-none">{feature.emoji}</div>
                <h3 className="text-[18px] lg:text-[20px] font-semibold text-black mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] text-[#47484D] font-light leading-relaxed max-w-[200px]">
                  {feature.desc}
                </p>
              </div>

              {/* Фоновый слой: ТАК ЖЕ САМАЯ Unicode Emoji, но трансформированная */}
              <div
                className="absolute z-0 
                   /* Позиционирование: сдвигаем сильно вправо и вниз */
                   bottom-[-20%] right-[-15%] 
                   
                   /* Увеличение: делаем очень большой */
                   text-[160px] lg:text-[220px]
                   
                   /* Специфично для emoji: чтобы CSS-эффекты применялись корректно к символу */
                   inline-block leading-none
                   
                   /* Трансформации */
                   scale-[1.2]      /* Дополнительное увеличение, если text-[size] мало */
                   blur-[3px]      /* Сильное размытие */
                   opacity-20       /* Делаем полупрозрачной (как на макете) */
                   saturate-[0.7]   /* Слегка приглушаем цвета emoji */
                   rotate-[-15deg]  /* Легкий поворот для динамики */
                   pointer-events-none /* Чтобы не мешала кликам */
              "
              >
                {feature.emoji} {/* Вставляем тот же самый emoji символ */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
