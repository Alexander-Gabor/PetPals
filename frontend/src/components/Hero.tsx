import { HERO_CONTENT } from '../constants'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-10">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>
        <p className="lg:mt-6 text-xl mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>
        <img src={HERO_CONTENT.image} className="w-full h-[75vh]
        object-cover rounded-2xl p-2" alt="hero" />

      </div>
    </section>
  )
}
