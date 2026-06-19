import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'
import Link from 'next/link'

export default async function HomePage() {
  const [services, team, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredTeam = team.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="container-narrow py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Specialized Medical Cleaning Services"
          subtitle="Using approved disinfectants and proven techniques to maintain safe, compliant healthcare environments."
        />
        {featuredServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink-500">No services available yet.</p>
        )}
        {services.length > 3 && (
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        )}
      </section>

      {/* Team */}
      {featuredTeam.length > 0 && (
        <section className="bg-brand-50 py-20">
          <div className="container-narrow">
            <SectionHeading
              eyebrow="Our People"
              title="Meet Our Trained Team"
              subtitle="Certified professionals dedicated to hygiene and infection control."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTeam.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
            {team.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/team"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Meet the Whole Team
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="container-narrow py-20">
          <SectionHeading
            eyebrow="Client Trust"
            title="What Our Clients Say"
            subtitle="Reliable, detail-oriented cleaning that healthcare facilities rely on."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          {testimonials.length > 3 && (
            <div className="text-center mt-10">
              <Link
                href="/testimonials"
                className="bg-white hover:bg-brand-50 text-brand-700 font-semibold px-6 py-3 rounded-lg border border-brand-200 transition-colors"
              >
                Read More Testimonials
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  )
}