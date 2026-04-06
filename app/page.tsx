import HeroSection from "@/components/about"
import CoursesSection from "@/components/CoursesSection"
import { Navbar } from "@/components/navbar"
import ShoolAbout from "@/components/ShoolAbout"
import TeachersSection from "@/components/TeachersSection"
import { Teachers } from "next/font/google"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeachersSection />
      <ShoolAbout />
      <CoursesSection />
    </>
  )
}
