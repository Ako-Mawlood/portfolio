"use client"

import Button from "@/components/Button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [time, setTime] = useState("")

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
  return (
    <section className="pointer-events-none relative top-0 left-0 z-10 flex h-screen w-screen flex-col items-start justify-between p-5 text-sm text-white md:p-10">
      <div className="pointer-events-auto flex w-full items-start justify-between">
        <div className="gap-o.5 flex flex-col">
          <strong>Hello, my name is</strong>
          <span>Ako M. Othman</span>
        </div>

        <div className="gap-o.5 pointer-events-auto hidden flex-col md:flex">
          <Button href="#about" text="About" />
          <Button href="#projects" text="Projects" />
          <Button href="#experience" text="Experience" />
          <Button href="#contact" text="Contact" />
        </div>
        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <Button href="https://github.com/Ako-Mawlood" text="Github" />
          <Button
            href="https://www.linkedin.com/in/ako-mawlood-1b8646252/"
            text="LinkedIn"
          />
          <Button
            href="https://www.linkedin.com/in/ako-mawlood-1b8646252/"
            text="X (Twitter)"
          />
          <Button href="https://leetcode.com/u/Ako-Mawlood/" text="LeetCode" />
        </div>

        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <strong>Freelance ability</strong>
          <div className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-amber-300"></span>
            <p>Limited</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center text-[12vw] sm:text-7xl md:text-[5rem] lg:text-8xl 2xl:text-9xl">
        <p className="self-start text-sm">{"{It's about}"}</p>
        <h1 className="w-fit">Mindfulness,</h1>
        <h1 className="ml-10 md:ml-44">Collaboration,</h1>
        <h1 className="">and Honor.</h1>
      </div>
      <div className="flex h-10 w-full items-center justify-between">
        <div className="gap-o.5 pointer-events-auto flex flex-col items-start">
          <Button
            href="https://cal.com/ako-mawlood-wwv8yg"
            text="Book a meeting"
            className="px-0 text-sm font-bold"
          />
        </div>
        <p className="pointer-events-auto hidden w-72 md:block">
          I collaborate with others to build things we couldn&rsquo;t create
          alone. It&rsquo;s about sharing ideas, skills, and passion to deliver
          meaningful work together.
        </p>
        <div className="animate-fade-in pointer-events-auto right-10 bottom-10 flex transform flex-col items-center gap-2">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-white" />
          </div>
          <p className="text-xs text-white">Scroll down</p>
        </div>

        <div className="gap-o.5 pointer-events-auto flex flex-col">
          <strong>Based in Erbil, Iraq</strong>
          <span>{time} UTC+3</span>
        </div>
      </div>
    </section>
  )
}
