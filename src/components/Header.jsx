import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900">VibeSite</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a
              href="#get-started"
              className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-1 rounded-md border border-gray-200 p-2 text-gray-700">
              <a href="#features" className="block rounded px-3 py-2 hover:bg-gray-50">Features</a>
              <a href="#about" className="block rounded px-3 py-2 hover:bg-gray-50">About</a>
              <a href="#contact" className="block rounded px-3 py-2 hover:bg-gray-50">Contact</a>
              <a href="#get-started" className="block rounded bg-gray-900 px-3 py-2 text-white hover:bg-gray-800">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
