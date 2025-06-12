"use client"

import { gsap } from "gsap"
import Hero from "@/components/Hero"
import TCanvas from "@/components/three/TCanvas"
import Projects from "@/components/Projects"
import clsx from "clsx"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import About from "@/components/About"
import Footer from "@/components/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
}

export default function HomePage() {
  if (typeof window === "undefined") {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    })
  }

  return (
    <>
      <div id="smooth-wrapper">
        <div
          id="smooth-wrapper"
          className={clsx("relative transition-opacity duration-1000")}
        >
          <Hero />
          <div className="absolute top-0 left-0 z-0 h-screen w-screen">
            <TCanvas />
          </div>
          <About />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}
