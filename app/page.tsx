import Hero from "@/components/Hero"
import TCanvas from "@/components/three/TCanvas"

export default function page() {
  return (
    <div>
      <Hero />
      <div className="fixed top-0 left-0 z-0 h-screen w-screen">
        <TCanvas />
      </div>
      <section className="h-screen w-full bg-black"></section>
      <section className="h-screen w-full bg-black"></section>
    </div>
  )
}
