import React from "react"
import Link from "next/link"
import clsx from "clsx"

type ButtonProps = {
  href?: string
  text: string
  className?: string
}

export default function Button({ href, text, className }: ButtonProps) {
  const content = (
    <span className="relative inline-flex overflow-hidden">
      <div className="translate-y-0 duration-300 group-hover:-translate-y-[110%]">
        {text}
      </div>

      <div className="absolute translate-y-[110%] duration-300 group-hover:translate-y-0">
        {text}
      </div>
    </span>
  )

  return href ? (
    <Link
      href={href}
      className={clsx(
        className,
        "group relative w-fit bg-transparent px-0 md:px-2",
      )}
    >
      {content}
    </Link>
  ) : (
    <button
      className={clsx(
        className,
        "group relative w-fit bg-transparent px-0 md:px-2",
      )}
    >
      {content}
    </button>
  )
}
