import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const photo = member.metadata?.photo
  const certifications = member.metadata?.certifications

  return (
    <div className="bg-white rounded-2xl border border-ink-300/40 overflow-hidden hover:shadow-xl transition-all">
      {photo && (
        <div className="aspect-square overflow-hidden">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-ink-900">{name}</h3>
        {role && <p className="text-sm font-medium text-brand-600 mb-3">{role}</p>}
        {bio && <p className="text-sm text-ink-700 leading-relaxed">{bio}</p>}
        {certifications && certifications.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert, idx) => (
              <span
                key={idx}
                className="bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}