import { ContactForm } from "./element/ContactForm"
import { ContactInfo } from "./element/ContactInfo"

export default function ContactSection() {
  return (
    <section id="ContactSection" className="w-full bg-[#F5F8FF] py-16 lg:py-24 font-['Geologica']">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        <div className="max-w-[800px] mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-medium text-black mb-6">
            Наши <span className="text-[#0066FF]">контакты</span>
          </h2>
          <p className="mt-2 lg:mt-3 font-['Geologica'] font-extralight text-[14px] lg:text-[20px] leading-relaxed lg:leading-[1.25] opacity-60 text-[#16161699] max-w-[1250px]">
            Свяжитесь с нами для записи на пробный урок или получения консультации
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Левая часть: Инфо и Карта */}
          <ContactInfo />

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
