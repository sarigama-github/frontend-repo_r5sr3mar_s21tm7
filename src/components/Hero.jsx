import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[110%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <Star className="h-3.5 w-3.5" /> New: Sleek starter with Tailwind + React
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build beautiful sites fast
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            A polished, responsive landing page scaffold with clean components and modern aesthetics. Start shipping in minutes, not days.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white shadow-sm hover:bg-gray-800"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
