export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 transform bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl h-64" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Ready to launch something great?
            </h3>
            <p className="mt-3 text-gray-600">
              Start with this clean, responsive template and customize it to your brand.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white shadow-sm hover:bg-gray-800 sm:w-auto"
              >
                Get Started Free
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50 sm:w-auto"
              >
                See Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
