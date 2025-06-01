import Hero from "@/components/Hero"
import TCanvas from "@/components/three/TCanvas"

export default function page() {
  return (
    <>
      <Hero />
      <div className="fixed w-screen h-screen z-0 top-0 left-0">
        <TCanvas />
      </div>
      <section className="h-screen w-full bg-black"></section>
    </>
  )
}
