"use client"

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)

type Props = {
  text: string
  className?: string
  delay?: number
  isOnScroll?: boolean
  duration?: number
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  isOnScroll = false,
  duration = 1,
}: Props) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      gsap.to(".char", {
        y: 0,
        opacity: 1,
        duration: duration,
        ease: "ease",
        delay: delay,
        scrollTrigger: isOnScroll
          ? {
              trigger: containerRef.current,
              start: "bottom bottom",
              toggleActions: "play none none none",
              once: true,
            }
          : null,
      })
    },
    { scope: containerRef, dependencies: [text] },
  )

  return (
    <span ref={containerRef} className={className} aria-label={text}>
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block overflow-hidden align-bottom">
          <span className="char inline-block translate-y-full opacity-0">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  )
}
