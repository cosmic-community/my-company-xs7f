import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team | Clean Max Janitorial Services Ltd.',
  description: 'Meet the trained, certified team behind Clean Max Janitorial Services Ltd.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container-narrow py-20">
      <SectionHeading
        eyebrow="Our People"
        title="Meet Our Team"
        subtitle="Certified professionals committed to patient safety and staff well-being."
      />
      {team.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p className="text-center text-ink-500">No team members available yet.</p>
      )}
    </div>
  )
}