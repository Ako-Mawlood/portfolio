"use client"

import { gsap } from "gsap"
import Hero from "@/components/Hero"
import TCanvas from "@/components/three/TCanvas"
import Projects from "@/components/Projects"
import clsx from "clsx"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function HomePage() {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  })

  return (
    <div id="smooth-wrapper" className="relative">
      <div
        id="smooth-wrapper"
        className={clsx("relative transition-opacity duration-1000")}
      >
        <Hero />
        <div className="fixed top-0 left-0 z-0 h-screen w-screen">
          <TCanvas />
        </div>
      </div>
      {/* <h1 className="relative mt-96 p-5 text-8xl md:p-10">
        <AnimatedText
          text="I build thoughtful, user-friendly front-end interfaces with care and precision."
          delay={0.5}
          isOnScroll={true}
          duration={0.5}
        />
      </h1> */}
      <Projects />
      <section className="h-screen w-screen"></section>
      <section className="h-screen w-screen"></section>
      <section className="h-screen w-screen"></section>
      <section className="h-screen w-screen"></section>
      <section className="h-screen w-screen"></section>
    </div>
  )
}
