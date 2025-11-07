import { Rocket, LightningBolt, Shield, Sparkles } from 'lucide-react'

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default function Features() {
  const list = [
    {
      icon: Rocket,
      title: 'Fast by default',
      description: 'Modern tooling and best practices out of the box so you can move quickly.'
    },
    {
      icon: LightningBolt,
      title: 'Developer friendly',
      description: 'Clean structure, typed examples, and sensible defaults for a smooth DX.'
    },
    {
      icon: Shield,
      title: 'Secure foundation',
      description: 'Built with security and reliability in mind, from day one.'
    },
    {
      icon: Sparkles,
      title: 'Elegant design',
      description: 'Thoughtful UI, tasteful motion, and great typography built-in.'
    }
  ]

  return (
    <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why choose this starter</h2>
          <p className="mt-4 text-gray-600">Everything you need to design and ship a delightful website, with zero fuss.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
