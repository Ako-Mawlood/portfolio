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
    id: "image1",
    number: "01",
    name: "Penwwws.com",
    description:
      "Penwwws.com is a modern blog platform built with Next.js, React, TypeScript, and Tailwind CSS. It features real-time comments, user authentication, responsive design, and uses ShadCN/UI, Cloudinary, and Zod for a seamless publishing experience.",
    image: "/images/penwwws.png",
    liveLink: "https://penwwws.com",
    githubLink: "https://github.com/ako-mawlood/penwwws-frontend",
  },
  {
    id: "image2",
    number: "02",
    name: "Post Room",
    description:
      "A custom blog post system that includes user roles, real-time interaction, and an optimized developer experience using Next.js, React, TypeScript, Tailwind CSS, and advanced form handling with Zod.",
    image: "/images/post-room.png",
    liveLink: "https://post-room.vercel.app",
    githubLink: "https://github.com/ako-mawlood/post-room",
  },
]

export default function Project() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  useGSAP(() => {
    gsap.to("#projects", {
      scrollTrigger: {
        trigger: "#projects",
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
      scrollTrigger: {
        trigger: "#projects-header2",
      },
      x: 200,
      duration: 1,
      ease: "power2.out",
    })

    gsap.to("#image1", {
      y: "-20%",
      scrollTrigger: {
        trigger: "#image1",
        start: "top center",
        scrub: true,
      },
    })

    gsap.to("#image2", {
      y: "-20%",

      scrollTrigger: {
        trigger: "#image2",
        start: "top 20%",
        end: "bottom -100%",
        scrub: true,
      },
    })
  })

  return (
    <section
      id="projects"
      className="mb-[25rem] flex h-fit w-full flex-col gap-10 bg-black px-6 py-20 text-white lg:px-16 xl:px-24"
    >
      <div className="leading-tight">
        <h1 id="projects-header1" className="text-heading">
          Selected
        </h1>
        <h1 id="projects-header2" className="text-heading">
          Works
        </h1>
      </div>
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={clsx(
            "relative my-10 flex w-full flex-col items-start justify-between gap-5 transition-opacity duration-700 md:h-[20rem] lg:flex-row",
            {
              "opacity-100": hoverIndex === index || hoverIndex === null,
              "md:opacity-10": hoverIndex !== index && hoverIndex !== null,
            },
          )}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <h1 className="text-7xl lg:max-w-2/12">{project.number}</h1>
          <AnimatedText isOnScroll={true} duration={0.5} className="text-5xl">
            {project.name}
          </AnimatedText>
          <div className="flex flex-col gap-10 text-sm lg:max-w-96">
            <AnimatedText className="text-lg" isOnScroll={true} duration={0.5}>
              {project.description}
            </AnimatedText>
            <div className="flex items-center gap-5">
              <Button
                href={project.liveLink}
                className="text-md w-fit rounded-full bg-white px-3 py-1 font-bold text-black"
              >
                Live
              </Button>
              <Button
                href={project.githubLink}
                className="text-md w-fit rounded-full border border-white px-3 py-1 font-bold text-white"
              >
                Github
              </Button>
            </div>
          </div>
          <div
            id="image-container"
            className="relative hidden h-fit overflow-hidden md:block md:h-[20rem] lg:max-w-4/12"
          >
            <Image
              id={project.id}
              src={project.image}
              width="1500"
              height="500"
              alt={`${project.name} image`}
              className="h-fit w-full rounded-xs"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
