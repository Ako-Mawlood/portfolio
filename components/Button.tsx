import React from "react"
import Link from "next/link"
import clsx from "clsx"
import AnimatedText from "@/components/AnimatedText"

type ButtonProps = {
  href?: string
  className?: string
  delay?: number
  children: React.ReactNode
}

export default function Button({
  href,
  className,
  delay,
  children,
}: ButtonProps) {
  const content = <AnimatedText delay={delay}>{children}</AnimatedText>

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
