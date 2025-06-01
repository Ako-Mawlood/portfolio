export default function Hero() {
  return (
    <section className="w-screen p-10 text-white z-10 h-screen sticky flex flex-col justify-between  top-0 left-0">
      <div className=" w-full flex items-center justify-between h-10">
        <div className="flex flex-col gap-o.5">
          <strong className="text-lg">Ako Mawlood</strong>
          <span className="text-sm md:text-base">Full-stack developer</span>
        </div>

        <div className="flex flex-col gap-o.5">
          <strong className="text-lg">Freelance ability</strong>
          <div className="flex gap-2 items-center">
            <span className="bg-yellow-300 animate-pulse size-1.5 rounded-full"></span>
            <span>Limited</span>
          </div>
        </div>
      </div>

      <div className=" w-full flex items-center justify-between h-10">
        <div className="flex flex-col gap-o.5">
          <strong className="text-lg">Email</strong>
          <span className="text-sm md:text-base">ako.mawlood01@gmail.com</span>
        </div>
        <strong className="animate-pulse absolute left-1/2 -translate-x/1/2">
          Scroll
        </strong>
        <div className="flex flex-col gap-o.5">
          <strong className="text-lg">Location</strong>
          <span>Erbil - Iraq</span>
        </div>
      </div>
    </section>
  )
}
