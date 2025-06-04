"use client"

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Button from "./Button"
import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"
import { useState } from "react"
import clsx from "clsx"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    id: "{01}",
    name: "Penwwws.com",
    description:
      "Penwwws.com is a modern blog platform built with Next.js, React, TypeScript, and Tailwind CSS. It features real-time comments, user authentication, responsive design, and uses ShadCN/UI, Cloudinary, and Zod for a seamless publishing experience.",
    image: "/images/penwwws.png",
    link: "https://penwwws.com",
  },
  {
    id: "{02}",
    name: "Post Room",
    description:
      "A custom blog post system that includes user roles, real-time interaction, and an optimized developer experience using Next.js, React, TypeScript, Tailwind CSS, and advanced form handling with Zod.",
    image: "/images/post-room.png",
    link: "https://post-room.vercel.app",
  },
  {
    id: "{03}",
    name: "Weather",
    description:
      "A custom blog post system that includes user roles, real-time interaction, and an optimized developer experience using Next.js, React, TypeScript, Tailwind CSS, and advanced form handling with Zod.",
    image: "/images/weather.png",
    link: "https://github.com/Ako-Mawlood/weather-project",
  },
]

export default function Project() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  useGSAP(() => {
    gsap.to("#projects-container", {
      scrollTrigger: {
        trigger: "#projects-container",
        scrub: true,
        toggleActions: "pause pause pause pause",
        start: "top 0%",
        end: "bottom 80%",
        pinSpacing: false,
        pin: true,
      },
    })

    gsap.from("#projects-header1", {
      scrollTrigger: "#projects-header1",
      x: 50,
      duration: 1,
      ease: "power2.out",
    })
    gsap.to("#projects-header2", {
      scrollTrigger: "#projects-header2",
      x: 200,
      duration: 1,
      ease: "power2.out",
    })
  })

  return (
    <section
      id="projects-container"
      className="flex w-full flex-col bg-black p-10 text-white"
    >
      <h1 id="projects-header1" className="text-heading">
        Selected
      </h1>
      <h1 id="projects-header2" className="text-heading">
        Works
      </h1>

      {projects.map((project, index) => (
        <div
          key={project.name}
          className={clsx(
            "relative my-10 flex w-full flex-col items-start justify-between p-10 transition-opacity duration-[1000ms] sm:flex-row",
            {
              "opacity-100": hoverIndex === index || hoverIndex === null,
              "opacity-10": hoverIndex !== index,
            },
          )}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatedText
            text={project.id}
            isOnScroll={true}
            className="absolute top-10 left-10 text-lg"
          />
          <div className="h-full sm:max-w-2/12"></div>
          <AnimatedText
            text={project.name}
            isOnScroll={true}
            duration={0.5}
            className="text-5xl"
          />
          <div className="flex max-w-96 flex-col gap-10 text-sm">
            <AnimatedText
              text={project.description}
              className="text-lg"
              isOnScroll={true}
              duration={0.5}
            />
            <Button
              text="View Project"
              href={project.link}
              className="text-md bg-white font-bold text-black"
            />
          </div>
          <div className="relative h-full sm:max-w-2/12">
            <Image
              src={project.image}
              width="600"
              height="500"
              alt={`${project.name} image`}
              className="h-full w-full rounded-xs object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
