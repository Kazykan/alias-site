import type { Metadata } from "next"
import { Geologica, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar" // Путь к твоему файлу Navbar
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

// Подключаем основной шрифт из твоего дизайна
const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["cyrillic", "latin"],
  weight: ["200", "400", "500", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alias School",
  description: "Школа иностранных языков",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${geologica.variable} ${geistMono.variable} h-full antialiased`}>
      {/* min-h-full + flex + flex-col позволяют странице занимать всю высоту экрана.
          Это нужно, чтобы основной контент (main) мог растягиваться, 
          выталкивая футер вниз.
      */}
      <body className="min-h-full flex flex-col font-geologica bg-[#E4E9F6]">
        {/* flex-1 заставляет этот блок занимать всё свободное место */}
        <main className="flex-1">{children}</main>
        <Toaster position="top-center" richColors />

        {/* Сюда позже добавишь <Footer /> */}
      </body>
    </html>
  )
}
