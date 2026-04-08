import Image from "next/image"

export interface Teacher {
  name: string
  role: string
  languages: string
  quote: string
  experience: string
  education: string
  specialization: string
  achievements: string[]
  image: string
}

interface TeacherCardProps {
  teacher: Teacher
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="relative group flex flex-col h-full min-h-[600px] rounded-[32px] overflow-hidden bg-[#0066FF] shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Фото преподавателя с градиентом как на макете */}
      <div className="relative w-full h-[300px] bg-white">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-contain object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF] via-transparent to-transparent" />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col flex-grow p-6 lg:p-8 text-white">
        {/* Имя и Роль */}
        <div className="mb-4">
          <h3 className="text-white text-[24px] font-light leading-[1.25] tracking-normal mb-2">
            {teacher.name}
          </h3>
          <span className="inline-block bg-[#FFB800] text-black text-[12px] font-light px-3 py-1 rounded-full uppercase">
            {teacher.role}
          </span>
        </div>

        {/* Языки и Цитата */}
        <div className="mb-4">
          <p className="text-[14px] font-light opacity-90 mb-2">Языки: {teacher.languages}</p>
          <div className="bg-white/20 p-3 rounded-xl text-[13px] leading-snug font-teacher-quote">
            "{teacher.quote}"
          </div>
        </div>

        {/* Детальная информация */}
        <div className="space-y-2 mb-6 text-[13px]">
          <p>
            <span className="font-bold opacity-70">Опыт:</span> {teacher.experience}
          </p>
          <p>
            <span className="font-bold opacity-70">Образование:</span> {teacher.education}
          </p>
          <p>
            <span className="font-bold opacity-70">Специализация:</span> {teacher.specialization}
          </p>
        </div>

        {/* Достижения */}
        <ul className="flex-grow space-y-1.5 mb-8">
          {teacher.achievements.map((item, idx) => (
            <li key={idx} className="flex items-start text-[13px] leading-tight">
              <span className="mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Кнопка */}
        <button className="w-full bg-white text-[#0066FF] py-3.5 rounded-2xl font-bold text-[16px] transition-colors hover:bg-[#F0F5FF]">
          Записаться
        </button>
      </div>
    </div>
  )
}
