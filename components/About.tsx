import AnimatedText from "@/components/AnimatedText"
import Button from "@/components/Button"

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col justify-between gap-10 bg-violet-50 p-5 text-black md:h-[60vh] md:gap-0 md:p-10"
    >
      <AnimatedText
        duration={0.5}
        delay={0.5}
        className="text-6xl md:w-[47.9rem]"
      >
        +2 year of experience with Githhub open source
      </AnimatedText>
      <div className="ml-auto flex flex-col gap-10 md:w-[50rem]">
        <AnimatedText
          duration={0.5}
          delay={0.5}
          className="inline-block text-sm md:text-xl"
        >
          Daniel, a freelance web designer and Webflow developer based in
          Bournemouth, UK. s a Webflow Premium Partner and member of the
          Awwwards Young Jury, I deliver standout digital projects with
          impressive turnaround times and creativity.
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
