"use client"

import Button from "@/components/Button"
import { useEffect, useState } from "react"
import AnimatedText from "@/components/AnimatedText"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"

export default function Hero() {
  const [time, setTime] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}`)
    }

    updateTime()

    const now = new Date()
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()

    const timeout = setTimeout(() => {
      updateTime()
      const interval = setInterval(updateTime, 60 * 1000)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 6500)

    return () => clearTimeout(timer)
  }, [])
  useGSAP(() => {
    gsap.to("#heading1, #heading3", {
      x: 50,
      duration: 1,
      delay: 5.5,
    })
    gsap.to("#heading2", {
      x: -50,
      duration: 1,
      delay: 5.5,
    })
  })
  return (
    <section className="pointer-events-none relative top-0 left-0 z-10 flex h-screen w-screen flex-col items-start justify-between p-5 text-sm text-white md:p-10">
      <div className="pointer-events-auto flex w-full items-start justify-between">
        <div className="gap-o.5 flex flex-col">
          <AnimatedText className="font-bold">Hello, my name is</AnimatedText>
          <span>
            <AnimatedText>Ako M. Othman</AnimatedText>
          </span>
        </div>

        <div className="gap-o.5 pointer-events-auto hidden flex-col md:flex">
          <Button href="#about">About</Button>
          <Button href="#projects">Projects</Button>
          <Button href="#experience">Experience</Button>
          <Button href="#contact">Contact</Button>
        </div>
        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <Button href="https://github.com/Ako-Mawlood">Github</Button>
          <Button href="https://www.linkedin.com/in/ako-mawlood-1b8646252/">
            LinkedIn
          </Button>
          <Button href="https://x.com/AkoMawlood">X (Twitter)</Button>
          <Button href="https://leetcode.com/u/Ako-Mawlood/">Leetcode</Button>
        </div>

        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <AnimatedText className="font-bold">Freelance ability</AnimatedText>
          <div className="flex items-center justify-start gap-1.5">
            <div
              className={clsx(
                "animate-fade-in size-1.5 transform animate-pulse rounded-full bg-amber-300 transition-all duration-1000",
                { "opacity-100": isVisible, "opacity-0": !isVisible },
              )}
            ></div>
            <AnimatedText className="pb-1 text-center">Limited</AnimatedText>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center text-[12vw] sm:text-6xl md:text-[5rem] lg:text-8xl 2xl:text-9xl">
        <AnimatedText className="self-start text-sm">
          {"{It's about}"}
        </AnimatedText>
        <h1 id="heading1" className="mr-[50px] w-fit">
          Mindfulness,
        </h1>
        <h1 id="heading2" className="ml-10 md:ml-[166px]">
          Collaboration,
        </h1>
        <h1 id="heading3" className="mr-[50px]">
          and Honor.
        </h1>
      </div>
      <div className="flex h-10 w-full items-center justify-between">
        <div className="gap-o.5 pointer-events-auto flex flex-col items-start">
          <Button
            href="https://cal.com/ako-mawlood-wwv8yg"
            className="px-0 text-sm font-bold"
          >
            Book a meeting
          </Button>
          <AnimatedText className="hidden sm:block">
            ako.mawlood01@gmail.com
          </AnimatedText>
        </div>
        <AnimatedText className="pointer-events-auto hidden w-62 md:block">
          I collaborate with others to build things we couldn&rsquo;t create
          alone. It&rsquo;s about sharing ideas, skills, and passion to deliver
          meaningful work together.
        </AnimatedText>
        <div
          className={clsx(
            "animate-fade-in pointer-events-auto right-10 bottom-10 flex transform flex-col items-center gap-2 transition-all duration-1000",
            { "opacity-100": isVisible, "opacity-0": !isVisible },
          )}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-white" />
          </div>
          <p className="text-xs text-white">Scroll down</p>
        </div>

        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <AnimatedText className="font-bold">
            Based in Erbil, Iraq
          </AnimatedText>
          <AnimatedText>{time} UTC+3</AnimatedText>
        </div>
      </div>
    </section>
  )
}
