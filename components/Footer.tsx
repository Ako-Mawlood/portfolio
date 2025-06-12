"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 2300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ako-mawlood",
      label: "View code",
    },
    {
      name: "Twitter",
      href: "https://x.com/AkoMawlood",
      label: "Follow updates",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ako-mawlood-1b8646252/",
      label: "Connect",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/Ako-Mawlood/",
      label: "View problems",
    },
  ]

  const navigationLinks = [
    { name: "About", href: "#about", description: "My story" },
    { name: "Projects", href: "#projects", description: "Selected work" },
    { name: "Contact", href: "#contact", description: "Get in touch" },
  ]

  return (
    <>
      <footer className="mt-[20rem] h-fit w-full bg-white">
        <div className="" />
        <div>
          <div className="px-6 py-20 lg:px-16 xl:px-24">
            {/* Hero */}
            <div className="mb-16 lg:mb-24">
              <div className="max-w-4xl">
                <h2 className="text-heading mb-10">
                  Let&apos;s create
                  <br />
                  something
                  <br />
                  <span className="font-normal italic">extraordinary</span>
                </h2>
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                  <div className="space-y-3 text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
                    <p>Available for freelance</p>
                    <p>Based worldwide • Remote first</p>
                    <p>Focused on quality & innovation</p>
                  </div>
                  <div className="text-right">
                    <div className="mb-2 font-mono text-2xl font-light text-black tabular-nums lg:text-3xl">
                      {currentTime}
                    </div>
                    <div className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                      Local time
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
              {/* Navigation */}
              <div>
                <h3 className="mb-6 text-xs font-medium tracking-[0.25em] text-gray-400 uppercase">
                  Navigation
                </h3>
                <nav className="space-y-1">
                  {navigationLinks.map(link => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex items-center justify-between border-b border-gray-100 py-4 transition-all hover:border-gray-300"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-xl font-light text-black transition group-hover:text-gray-600 lg:text-2xl">
                          {link.name}
                        </span>
                        <span className="text-xs text-gray-400 transition group-hover:text-gray-600">
                          {link.description}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-gray-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                      />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social */}
              <div>
                <h3 className="mb-6 text-xs font-medium tracking-[0.25em] text-gray-400 uppercase">
                  Connect
                </h3>
                <div className="space-y-1">
                  {socialLinks.map(social => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="group flex items-center justify-between border-b border-gray-100 py-4 transition-all hover:border-gray-300"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-xl font-light text-black transition group-hover:text-gray-600 lg:text-2xl">
                          {social.name}
                        </span>
                        <span className="text-xs text-gray-400 transition group-hover:text-gray-600">
                          {social.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-gray-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                      />
                    </Link>
                  ))}
                </div>

                {/* Email + Status row */}
                <div className="mt-10 flex flex-col justify-between gap-6 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="mb-2 text-xs font-medium tracking-[0.25em] text-gray-400 uppercase">
                      Email
                    </p>
                    <Link
                      href="mailto:ako.mawlood01@gmail.com"
                      className="text-xl font-light text-black transition hover:text-gray-600 lg:text-2xl"
                    >
                      ako.mawlood01@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    <span className="text-sm font-light text-gray-600">
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-6 border-t border-gray-100 px-0 pt-6 text-sm text-gray-500 lg:flex-row lg:items-center lg:justify-between lg:pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p>
                  Created with love by{" "}
                  <span className="font-normal text-black">myself</span>
                </p>
                <p className="text-xs text-gray-400">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
              <div className="flex items-center gap-6 text-xs tracking-[0.15em] text-gray-400 uppercase">
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-gray-600"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-gray-600"
                >
                  Terms
                </Link>
                <Link
                  href="/cookies"
                  className="transition-colors hover:text-gray-600"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll To Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white bg-black text-white shadow-lg transition hover:scale-110 hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp
            className="transition-transform group-hover:-translate-y-0.5"
            size={18}
          />
        </button>
      )}
    </>
  )
}

export default Footer
