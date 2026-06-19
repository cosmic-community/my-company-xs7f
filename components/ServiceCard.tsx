import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const emoji = getMetafieldValue(service.metadata?.icon_emoji)
  const desc = getMetafieldValue(service.metadata?.short_description)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-ink-300/40 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          {emoji && <span className="text-3xl">{emoji}</span>}
          <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
        </div>
        {desc && <p className="text-sm text-ink-700 leading-relaxed">{desc}</p>}
        <span className="inline-block mt-4 text-sm font-semibold text-brand-600">
          Learn more →
        </span>
      </div>
    </Link>
  )
}