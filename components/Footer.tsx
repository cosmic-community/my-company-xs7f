import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-white mt-20">
      <div className="container-narrow py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <span className="text-2xl">🧼</span>
            <span>Clean Max Janitorial</span>
          </div>
          <p className="text-sm text-ink-300 leading-relaxed">
            Professional medical facilities cleaning services in Calgary with a strong focus on
            hygiene and infection control.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-brand-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-ink-300">
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-brand-300">Service Area</h3>
          <p className="text-sm text-ink-300 leading-relaxed">
            Serving clinics, medical offices, and healthcare facilities throughout Calgary, AB.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-4 text-center text-xs text-ink-300">
          © {year} Clean Max Janitorial Services Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}