import AnimatedText from "@/components/AnimatedText"
import Button from "@/components/Button"

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col justify-between gap-10 bg-neutral-50 px-6 py-20 text-black md:h-[60vh] md:gap-0 lg:px-16 xl:px-24"
    >
      <AnimatedText
        duration={0.5}
        delay={0.5}
        className="text-7xl tracking-tighter"
      >
        Over 1 year of experience,
        <br /> contributing to open-source
        <br /> on GitHub
      </AnimatedText>
      <div className="ml-auto flex flex-col gap-10 md:w-[50rem]">
        <AnimatedText
          duration={0.5}
          delay={0.5}
          className="inline-block text-sm md:text-xl"
        >
          Hi, I’m Ako Mawlood — a freelance front-end developer from the
          Kurdistan Region. I build fast, modern websites with React, Next.js,
          and TypeScript, focusing on clean design and smooth user experiences.
        </AnimatedText>
        <div className="flex gap-5">
          <Button
            className="k rounded-full bg-black px-3 py-1 text-base text-white"
            href="https://cal.com/ako-mawlood-wwv8yg"
          >
            Book a meeting
          </Button>
          <Button
            className="rounded-full border border-black px-3 py-1 text-base font-bold text-black"
            href="mailto:ako.mawlood01@gmail.com"
          >
            Email me
          </Button>
        </div>
      </div>
    </section>
  )
}
