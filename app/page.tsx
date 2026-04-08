import HeroSection from "@/components/about"
import JoinTeamSection from "@/components/JoinTeamSection"
import CoursesSection from "@/components/CoursesSection"
import { Navbar } from "@/components/navbar"
import ReviewsSection from "@/components/ReviewsSection"
import ShoolAbout from "@/components/ShoolAbout"
import TeachersSection from "@/components/TeachersSection"
import { Teachers } from "next/font/google"
import Image from "next/image"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeachersSection />
      <ShoolAbout />
      <CoursesSection />
      <ReviewsSection />
      <JoinTeamSection />
      <ContactSection />
    </>
  )
}
