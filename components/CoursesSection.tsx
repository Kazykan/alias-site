"use client"
import CourseCard, { Course } from "./element/CourseCard"

const courses: Course[] = [
  {
    title: "Английский язык",
    subtitle: "Все уровни! A1-C2",
    duration: "4-8 месяцев",
    groupSize: "4-6 человек",
    price: "от 4 000 ₽/мес",
    image: "/courses/course_1.png",
    features: [
      "Разговорная практика с носителями",
      "Грамматика и лексика",
      "Business English",
      "Подготовка к IELTS/TOEFL",
    ],
  },
  {
    title: "Французский язык",
    subtitle: "A1-C1",
    duration: "5-9 месяцев",
    groupSize: "4-6 человек",
    price: "от 4 500 ₽/мес",
    image: "/courses/course_2.png",
    features: [
      "Французская фонетика",
      "Культура и традиции",
      "Деловой французский",
      "DELF/DALF подготовка",
    ],
  },
  {
    title: "Испанский язык",
    subtitle: "A1-C1",
    duration: "5-8 месяцев",
    groupSize: "4-6 человек",
    price: "от 4 200 ₽/мес",
    image: "/courses/course_3.png",
    features: [
      "Латиноамериканский испанский",
      "Разговорная практика",
      "Культура Испании и Латинской Америки",
      "DELE подготовка",
    ],
  },
  {
    title: "Подготовка к ЕГЭ",
    subtitle: "Интенсивный курс",
    duration: "6-10 месяцев",
    groupSize: "3-5 человек",
    price: "от 5 000 ₽/мес",
    image: "/courses/course_4.png",
    features: [
      "Все задания ЕГЭ",
      "Регулярные пробные тесты",
      "Индивидуальный подход",
      "Гарантия высоких баллов",
    ],
  },
  {
    title: "YLE Cambridge",
    subtitle: "Детские экзамены",
    duration: "3-6 месяцев",
    groupSize: "4-6 человек",
    price: "от 3 500 ₽/мес",
    image: "/courses/course_5.png",
    features: ["Starters (Pre A1)", "Movers (A1)", "Flyers (A2)", "Игровые методики"],
  },
  {
    title: "Подростковые программы",
    subtitle: "12-17 лет",
    duration: "4-6 месяцев",
    groupSize: "4-6 человек",
    price: "от 4 000 ₽/мес",
    image: "/courses/course_6.png",
    features: [
      "Интерактивные методики",
      "Современные темы",
      "Творческие проекты",
      "Подготовка к экзаменам",
    ],
  },
]

export default function CoursesSection() {
  return (
    <section id="CourseSection" className="w-full py-16 lg:py-24 bg-white font-['Geologica']">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        {/* Заголовок */}
        <div className="max-w-[800px] mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-medium text-black mb-6">
            Курсы и <span className="text-[#0066FF]">программы</span>
          </h2>
          <p className="mt-2 lg:mt-8 font-['Geologica'] font-extralight text-[16px] lg:text-[24px] leading-relaxed lg:leading-[1.25] opacity-60 text-[#16161699] max-w-[1250px]">
            Выберите программу, которая подходит именно вам. Мы предлагаем курсы английского,
            французского и испанского языков для всех возрастов и уровней подготовки.
          </p>
        </div>

        {/* Сетка карточек */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
