// app/services/[slug]/page.tsx
import { getService, getServices, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const emoji = getMetafieldValue(service.metadata?.icon_emoji)
  const desc = getMetafieldValue(service.metadata?.short_description)
  const details = getMetafieldValue(service.metadata?.full_details)
  const image = service.metadata?.featured_image
  const features = service.metadata?.key_features

  return (
    <article>
      {image && (
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2000&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
        </div>
      )}

      <div className="container-narrow py-12 max-w-3xl">
        <Link href="/services" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
          ← Back to Services
        </Link>

        <div className="flex items-center gap-3 mt-6 mb-4">
          {emoji && <span className="text-4xl">{emoji}</span>}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900">{name}</h1>
        </div>

        {desc && <p className="text-lg text-ink-700 leading-relaxed mb-8">{desc}</p>}

        {features && features.length > 0 && (
          <div className="bg-brand-50 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-ink-900 mb-4">Key Features</h2>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-ink-700">
                  <span className="text-brand-600 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {details && (
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        )}
      </div>
    </article>
  )
}