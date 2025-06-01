"use client"

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

type Props = {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className, delay = 0.5 }: Props) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      gsap.to(".char", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "ease",
        delay: delay,
      })
    },
    { scope: containerRef, dependencies: [text] },
  )

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className || ""}`}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-bottom leading-[1.1em]"
        >
          <span className="char inline-block translate-y-full opacity-0">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  )
}
