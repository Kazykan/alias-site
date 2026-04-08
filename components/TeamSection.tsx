"use client"

import TeacherCard, { Teacher } from "./element/TeacherCard"

const teachers: Teacher[] = [
  {
    name: "Верещегина Ольга Сергеевна",
    role: "Сооснователь студии",
    languages: "Английский и французский языки",
    quote: "Изучение языка — это путешествие, в котором каждый урок открывает новые горизонты.",
    experience: "10+ лет",
    education: "МГУ им. М.В. Ломоносова, филологический факультет",
    specialization: "ЕГЭ, YLE Cambridge, Business English",
    achievements: [
      "Сертификат CELTA (Cambridge)",
      "DELF C2 (французский язык)",
      "500+ успешных учеников",
      "Автор методических пособий",
    ],
    image: "/team/teacher-evgeniya.png", // Замените на ваши пути
  },
  {
    name: "Кочербаева Алия Ахметовна",
    role: "Руководитель студии",
    languages: "Английский и французский языки",
    quote: "Каждый студент уникален, и моя задача — найти к нему правильный подход.",
    experience: "8+ лет",
    education: "КазНУ им. аль-Фараби, факультет международных отношений",
    specialization: "Методика преподавания, Business English",
    achievements: [
      "TESOL Certification",
      "DALF C1 (французский язык)",
      "400+ учеников",
      "Специалист по деловому английскому",
    ],
    image: "/team/teacher-aliay.png",
  },
  {
    name: "Тихомирова Анна Александровна",
    role: "Преподаватель",
    languages: "Английский и испанский языки",
    quote: "Язык — это ключ к культуре. Изучая язык, мы открываем целый мир.",
    experience: "6+ лет",
    education: "МГИМО, факультет международных отношений",
    specialization: "Разговорная практика, DELE, культурология",
    achievements: [
      "DELE C2 (испанский язык)",
      "CAE Certificate (английский)",
      "300+ учеников",
      "Стажировка в Барселоне",
    ],
    image: "/team/teacher-anna.png",
  },
  {
    name: "Ярцева Софья Юрьевна",
    role: "Преподаватель",
    languages: "Английский и испанский языки",
    quote: "С детьми нужно говорить на их языке — языке игры и творчества.",
    experience: "5+ лет",
    education: "МГУ им. М.В. Ломоносова, романо-германская филология",
    specialization: "Подростковая программа, творческий метод",
    achievements: [
      "DELF B2 (французский язык)",
      "FCE Certificate (английский)",
      "250+ учеников",
      "Специалист по детской психологии",
    ],
    image: "/team/teacher-sofiya.png",
  },
]

export default function TeamSection() {
  return (
    <section id="TeamSection" className="w-full py-16 lg:py-24 bg-[#F0F5FF] font-['Geologica']">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        <div className="max-w-[800px] mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-medium text-black mb-6">
            Наша <span className="text-[#0066FF]">команда</span>
          </h2>
          <p className="font-extralight text-[16px] lg:text-[20px] leading-relaxed opacity-70 text-[#161616]">
            Профессиональные преподаватели с международными сертификатами и многолетним опытом
            преподавания английского, французского и испанского языков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  )
}
