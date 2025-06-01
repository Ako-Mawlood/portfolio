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
    }, 7000)

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
          <AnimatedText
            text="Hello, my name is"
            className="font-bold"
            delay={6.5}
          />
          <span>
            <AnimatedText text="Ako M. Othman" delay={6.5} />
          </span>
        </div>

        <div className="gap-o.5 pointer-events-auto hidden flex-col md:flex">
          <Button href="#about" text="About" delay={6.5} />
          <Button href="#projects" text="Projects" delay={6.5} />
          <Button href="#experience" text="Experience" delay={6.5} />
          <Button href="#contact" text="Contact" delay={6.5} />
        </div>
        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <Button
            href="https://github.com/Ako-Mawlood"
            text="Github"
            delay={6.5}
          />
          <Button
            href="https://www.linkedin.com/in/ako-mawlood-1b8646252/"
            text="LinkedIn"
            delay={6.5}
          />
          <Button
            href="https://www.linkedin.com/in/ako-mawlood-1b8646252/"
            text="X (Twitter)"
            delay={6.5}
          />
          <Button
            href="https://leetcode.com/u/Ako-Mawlood/"
            text="LeetCode"
            delay={6.5}
          />
        </div>

        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <AnimatedText
            text="Freelance ability"
            className="font-bold"
            delay={6.5}
          />
          <div className="flex items-center justify-start gap-1.5">
            <div
              className={clsx(
                "animate-fade-in size-1.5 transform animate-pulse rounded-full bg-amber-300 transition-all duration-1000",
                { "opacity-100": isVisible, "opacity-0": !isVisible },
              )}
            ></div>
            <AnimatedText
              text="Limited"
              className="pb-1 text-center"
              delay={6.5}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center text-[12vw] sm:text-6xl md:text-[5rem] lg:text-8xl 2xl:text-9xl">
        <AnimatedText
          text="{It's about}"
          delay={6.5}
          className="self-start text-sm"
        />
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
            text="Book a meeting"
            className="px-0 text-sm font-bold"
            delay={6.5}
          />
          <AnimatedText text="ako.mawlood01@gmail.com" delay={6.5} />
        </div>
        <p className="pointer-events-auto hidden w-62 md:block">
          <AnimatedText
            delay={6.5}
            text="I collaborate with others to build things we couldn&rsquo;t create
          alone. It&rsquo;s about sharing ideas, skills, and passion to deliver
          meaningful work together.
        "
          />
        </p>
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
          <AnimatedText
            text="Based in Erbil, Iraq"
            className="font-bold"
            delay={6.5}
          />
          <AnimatedText text={`${time} UTC+3`} delay={6.5} />
        </div>
      </div>
    </section>
  )
}
