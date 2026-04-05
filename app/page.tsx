import HeroSection from "@/components/about"
import { Navbar } from "@/components/navbar"
import TeachersSection from "@/components/teachers"
import { Teachers } from "next/font/google"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar /> <HeroSection /> <TeachersSection />
    </>
  )
}
