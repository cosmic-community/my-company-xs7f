import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-narrow py-32 text-center">
      <div className="text-6xl mb-4">🧼</div>
      <h1 className="text-3xl font-extrabold text-ink-900 mb-3">Page Not Found</h1>
      <p className="text-ink-700 mb-8">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}