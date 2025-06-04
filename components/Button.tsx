import React from "react"
import Link from "next/link"
import clsx from "clsx"
import AnimatedText from "./AnimatedText"

type ButtonProps = {
  href?: string
  text: string
  className?: string
  delay?: number
}

export default function Button({ href, text, className, delay }: ButtonProps) {
  const content = (
    <span className="relative inline-flex overflow-hidden">
      <div className="translate-y-0 duration-300 group-hover:-translate-y-[110%]">
        <AnimatedText text={text} delay={delay} />
      </div>

      <div className="absolute translate-y-[110%] duration-300 group-hover:translate-y-0">
        <AnimatedText text={text} delay={delay} />
      </div>
    </span>
  )

  return href ? (
    <Link
      href={href}
      className={(clsx("group relative w-fit px-0 md:px-2"), className)}
    >
      {content}
    </Link>
  ) : (
    <button className={clsx("group relative w-fit px-0 md:px-2", className)}>
      {content}
    </button>
  )
}
