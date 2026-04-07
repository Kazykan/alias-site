import Image from "next/image"

export interface Review {
  name: string
  subject: string
  text: string
  rating: number
  avatar?: string // Если будет реальное фото, иначе используем иконку
}

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-[32px] p-8 h-full shadow-sm border border-gray-50 transition-all hover:shadow-md">
      {/* Шапка отзыва */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-[#F0F5FF] rounded-full flex items-center justify-center overflow-hidden">
          {review.avatar ? (
            <Image src={review.avatar} alt={review.name} width={48} height={48} />
          ) : (
            <span className="text-xl">🎓</span> // Плейсхолдер как на макете
          )}
        </div>
        <div>
          <h4 className="text-[18px] font-bold text-black leading-tight">{review.name}</h4>
          <p className="text-[14px] text-gray-500">{review.subject}</p>
        </div>
      </div>

      {/* Текст отзыва */}
      <div className="flex-grow mb-8">
        <p className="text-[16px] leading-[1.5] text-[#161616] italic opacity-90">
          «{review.text}»
        </p>
      </div>

      {/* Рейтинг */}
      <div className="mt-auto">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#FFD700] text-xl">
              {i < review.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <p className="text-[14px] text-gray-400">Оценка: {review.rating} из 5</p>
      </div>
    </div>
  )
}
