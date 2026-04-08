import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const ContactInfo = () => {
  const contacts = [
    {
      // Задаем размер иконок для единообразия
      icon: <MapPin size={20} />,
      title: "Адрес",
      desc: "г. Ставрополь, ул. 50 лет ВЛКСМ, д. 109, оф. 304А",
    },
    {
      icon: <Phone size={20} />,
      title: "Телефон",
      desc: "+7 (999) 123-45-67",
    },
    {
      icon: <Mail size={20} />,
      title: "Почта",
      desc: "info@alias26.ru",
    },
    {
      icon: <Clock size={20} />,
      title: "Режим работы",
      desc: "Пн-Пт: 9:00 - 21:00",
      sub: "Сб-Вс: 10:00 - 18:00",
    },
  ]

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold text-[#1e1e1e]">Как нас найти</h3>

      <div className="flex flex-col gap-3">
        {contacts.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* Круг для иконки — цвет можно подправить под ваш брендбук */}
            <div className="bg-blue-50 text-blue-600 p-3 rounded-full shrink-0">{item.icon}</div>
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 leading-tight">{item.title}</p>
              <p className="text-[#4b4b4b] mt-1">{item.desc}</p>
              <p className="text-sm text-gray-400 mt-0.5">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Контейнер карты — один, со всеми нужными скруглениями */}
      <div className="w-full h-[250px] md:h-[360px] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Abaedb16e391e855d05b59fb428ed17a0590d4133b66f5557b37f532de5b58ae0&amp;source=constructor"
          width="100%"
          height="100%"
          className="border-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-300"
          title="Yandex Map"
        />
      </div>
    </div>
  )
}
