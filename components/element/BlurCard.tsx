export interface FeatureProps {
  emoji: string
  first_title: string // Первое слово (синее)
  title?: string
  desc: string
}

// Вынесенный компонент карточки
export const BlurCard = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="relative overflow-hidden bg-white/60 backdrop-blur-md rounded-[30px] lg:rounded-[40px] p-4 lg:p-6 shadow-[0px_4px_15px_rgba(71,72,77,0.05)] border border-white h-full transition-all hover:translate-y-[-2px]">
      {/* Контентный слой: четкий emoji и текст */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-4xl mb-4 leading-none select-none">{feature.emoji}</div>
        <h3 className="text-[18px] lg:text-[20px] font-semibold text-black mb-2 leading-tight">
          {/* Синее слово */}
          <span className="text-[#0066FF]">{feature.first_title}</span>
          {/* Пробел и остальная часть */}
          {feature.title && <span> {feature.title}</span>}
        </h3>
        <p className="text-[12px] lg:text-[14px] text-[#47484D] font-light leading-relaxed max-w-[220px]">
          {feature.desc}
        </p>
      </div>

      {/* Фоновый слой: размытый emoji */}
      <div
        aria-hidden="true"
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
          pointer-events-none /* Чтобы не мешала кликам */"
      >
        {feature.emoji}
      </div>
    </div>
  )
}

// Использование в основном цикле:
/*
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {features.map((item, i) => (
    <BlurCard key={i} feature={item} />
  ))}
</div>
*/
