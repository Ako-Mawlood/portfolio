"use client"

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SplitText from "gsap/SplitText"
import clsx from "clsx"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

type Props = {
  className?: string
  delay?: number
  isOnScroll?: boolean
  duration?: number
  children: React.ReactNode
}

export default function AnimatedText({
  className,
  delay,
  isOnScroll = false,
  duration = 1,
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const split = SplitText.create(containerRef.current, {
          type: "words",
        })

        gsap.from(split.words, {
          y: "100%",
          opacity: 0,
          duration: duration,
          ease: "ease",
          delay: delay,
          stagger: 0.02,
          scrollTrigger: isOnScroll
            ? {
                trigger: containerRef.current,
                once: true,
              }
            : null,
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className={clsx("overflow-hidden", className)}>
      {children}
    </div>
  )
}
