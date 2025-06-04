import AnimatedText from "@/components/AnimatedText"
import Button from "@/components/Button"

export default function Description() {
  return (
    <section className="relative flex h-[60vh] w-full flex-col justify-between bg-violet-50 p-5 text-black md:p-10">
      <AnimatedText
        text="+2 Years Web Development Experience, Github Open Source Collaboration"
        isOnScroll
        duration={0.5}
        delay={0.5}
        className="inline-block w-[47.9rem] pt-14 text-6xl"
      />
      <div className="ml-auto flex w-[50rem] flex-col gap-10 pb-14">
        <AnimatedText
          text="I'm Daniel, a freelance web designer and Webflow developer based in Bournemouth, UK. I specialise in creating bespoke, high-converting websites for startups, B2B, fintech companies as well as award-winning websites for digital/creative agencies. As a Webflow Premium Partner and member of the Awwwards Young Jury, I deliver standout digital projects with impressive turnaround times and creativity."
          isOnScroll
          duration={0.5}
          delay={0.5}
          className="inline-block text-xl"
        />
        <div className="flex gap-5">
          <Button
            text="Book a meeting"
            className="k rounded-full bg-black px-3 py-1 text-base text-white"
            href="https://cal.com/ako-mawlood-wwv8yg"
          />
          <Button
            text="Email me"
            className="rounded-full border border-black px-3 py-1 text-base font-bold text-black"
            href="mailto:ako.mawlood01@gmail.com"
          />
        </div>
      </div>
    </section>
  )
}
