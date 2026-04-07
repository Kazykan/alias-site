"use client"
import ReviewCard, { Review } from "./element/ReviewCard"

const reviews: Review[] = [
  {
    name: "Мария В.",
    subject: "Испанский язык",
    text: "Анна Александровна влюбила меня в испанский язык. Уроки всегда интересные и познавательные! Сейчас планирую поездку в Испанию.",
    rating: 5,
  },
  {
    name: "Михаил К.",
    subject: "Французский язык",
    text: "Алия Ахметовна помогла мне с деловым французским. Теперь уверенно веду переговоры с партнерами из Франции. Отличный результат!",
    rating: 5,
  },
  {
    name: "Анна М.",
    subject: "Английский язык",
    text: "Благодаря Евгении Сергеевне сдала ЕГЭ на 94 балла! Очень благодарна за терпение и профессионализм. Уроки всегда были интересными и продуктивными!",
    rating: 5,
  },
  {
    name: "Дмитрий П.",
    subject: "Подготовка к ЕГЭ",
    text: "За 8 месяцев подготовки повысил свой уровень с B1 до C1. Поступил в МГУ! Спасибо за качественную подготовку.",
    rating: 5,
  },
  {
    name: "Елена С.",
    subject: "YLE Cambridge (дочь)",
    text: "Моя дочь с удовольствием ходит на уроки к Софье Юрьевне. Успешно сдала YLE Movers! Творческий подход к детям - это здорово!",
    rating: 5,
  },
  {
    name: "Александр Р.",
    subject: "Немецкий язык",
    text: "Прекрасная атмосфера и четкая структура занятий. Уровень языка вырос на глазах за полгода обучения.",
    rating: 5,
  },
]

export default function ReviewsSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F8FAFF] font-['Geologica']">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        {/* Заголовок блока */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-[40px] lg:text-[64px] font-bold text-black mb-4">
            <span className="text-[#0066FF]">Отзывы</span> наших клиентов
          </h2>
          <p className="text-[18px] lg:text-[24px] text-[#16161699] font-extralight max-w-[800px]">
            Реальные истории успеха от людей, которые достигли своих целей с нашей помощью.
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((item, index) => (
            <ReviewCard key={index} review={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
