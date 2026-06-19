import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <div className="container-narrow py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Calgary Medical Facility Cleaning Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-ink-900 mb-6">
            Hygiene & Infection Control You Can <span className="text-brand-600">Trust</span>
          </h1>
          <p className="text-lg text-ink-700 leading-relaxed mb-8">
            Clean Max Janitorial Services Ltd. delivers reliable, detail-oriented medical cleaning
            that supports patient safety and staff well-being. Our trained team follows strict
            protocols to sanitize exam rooms, waiting areas, restrooms, and high-touch surfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Our Services
            </Link>
            <Link
              href="/testimonials"
              className="bg-white hover:bg-brand-50 text-brand-700 font-semibold px-6 py-3 rounded-lg border border-brand-200 transition-colors"
            >
              Read Testimonials
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://imgix.cosmicjs.com/7ed2bfb0-6bcb-11f1-8dfe-457508ece1b8-autopilot-photo-1538108149393-fbbd81895907-1781865717538.jpeg?w=1200&h=900&fit=crop&auto=format,compress"
            alt="Professional medical facility cleaning"
            width={600}
            height={450}
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}