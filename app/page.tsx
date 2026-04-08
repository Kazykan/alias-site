import HeroSection from "@/components/about"
import JoinTeamSection from "@/components/JoinTeamSection"
import CoursesSection from "@/components/CoursesSection"
import ReviewsSection from "@/components/ReviewsSection"
import ShoolAbout from "@/components/ShoolAbout"
import TeachersSection from "@/components/TeachersSection"
import { Teachers } from "next/font/google"
import Image from "next/image"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import TeamSection from "@/components/TeamSection"
import { NavbarSection } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <TeachersSection />
      <TeamSection />
      <ShoolAbout />
      <CoursesSection />
      <ReviewsSection />
      <JoinTeamSection />
      <ContactSection />
      <Footer />
    </>
  )
}
