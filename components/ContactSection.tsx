import { ContactForm } from "./element/ContactForm"

export default function ContactSection() {
  return (
    <section className="w-full bg-[#F5F8FF] py-16 lg:py-24 font-['Geologica']">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Левая часть: Инфо и Карта */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[32px] lg:text-[56px] font-medium text-black mb-4">
                Наши <span className="text-[#0066FF]">контакты</span>
              </h2>
              <p className="text-[#16161699] text-lg">
                Свяжитесь с нами для записи на пробный урок или получения консультации
              </p>
            </div>

            {/* Тут будут твои иконки адреса/телефона */}
            <div className="space-y-4">{/* ... (код иконок) */}</div>

            {/* Заглушка карты */}
            <div className="w-full h-[300px] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
              Интерактивная карта
            </div>
          </div>

          {/* Правая часть: Форма */}
          <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Запишитесь на пробный урок</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
