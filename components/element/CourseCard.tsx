import Image from "next/image"

export interface Course {
  title: string
  subtitle: string
  duration: string
  groupSize: string
  price: string
  features: string[]
  image: string
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="relative group flex flex-col h-full min-h-[480px] rounded-3xl overflow-hidden bg-[#0066FF] transition-transform duration-300 hover:-translate-y-2">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 w-full h-[60%]">
        <Image src={course.image} alt={course.title} fill className="object-cover opacity-60" />
        {/* Градиентный переход от фото к синему фону */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0066FF] via-[#0066FF]/70 to-transparent" />
      </div>

      {/* Контент карточки */}
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 pt-12">
        <h3 className="text-white text-[24px] lg:text-[28px] font-bold mb-1 leading-tight">
          {course.title}
        </h3>
        <p className="text-white/80 text-[16px] mb-6">{course.subtitle}</p>

        {/* Инфо-параметры */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center text-white/90 text-sm">
            <span className="mr-2">🕒</span> {course.duration}
          </div>
          <div className="flex items-center text-white/90 text-sm">
            <span className="mr-2">👥</span> {course.groupSize}
          </div>
          <div className="flex items-center text-white/90 text-sm">
            <span className="mr-2">💰</span> {course.price}
          </div>
        </div>

        {/* Список особенностей */}
        <ul className="flex-grow space-y-2 mb-8">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-white text-[14px] leading-snug">
              <span className="mr-2 opacity-70">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Кнопка */}
        <button className="w-full bg-white text-[#0066FF] py-4 rounded-full font-medium text-[16px] transition-colors hover:bg-[#F0F5FF]">
          Подробнее о курсе
        </button>
      </div>
    </div>
  )
}
