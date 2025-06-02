"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Hero from "@/components/Hero"
import TCanvas from "@/components/three/TCanvas"
import AnimatedText from "@/components/AnimatedText"
import clsx from "clsx"

export default function HomePage() {
  const [loadingState, setLoadingState] = useState<number>(0)
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      setLoadingState(1)

      await new Promise(resolve => setTimeout(resolve, 2500))
      setLoadingState(2)

      await new Promise(resolve => setTimeout(resolve, 2500))
      setLoadingState(3)

      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 1,
          ease: "ease",
          onComplete: () => {
            if (loadingRef.current) {
              loadingRef.current.style.display = "none"
            }
          },
        })
      }
    }

    sequence()
  }, [])

  return (
    <div className="relative">
      <div
        ref={loadingRef}
        className="text fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity"
      >
        <div
          className={clsx("transition-opacity duration-500", {
            "opacity-100": loadingState < 3,
            "opacity-0": loadingState === 3,
          })}
        >
          {loadingState === 1 && (
            <AnimatedText text="Ako Mawlood" className="text-2xl" />
          )}

          {loadingState === 2 && (
            <AnimatedText text="Frontend Developer" className="text-2xl" />
          )}
        </div>
      </div>

      <div
        className={clsx("transition-opacity duration-1000", {
          "opacity-100": loadingState === 3,
          "opacity-0": loadingState < 3,
        })}
      >
        <Hero />
        <div className="fixed top-0 left-0 z-0 h-screen w-screen">
          <TCanvas />
        </div>
      </div>
    </div>
  )
}
