import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials | Clean Max Janitorial Services Ltd.',
  description: 'Read what healthcare facilities say about Clean Max Janitorial Services Ltd.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-narrow py-20">
      <SectionHeading
        eyebrow="Client Trust"
        title="What Our Clients Say"
        subtitle="Trusted by clinics, medical offices, and healthcare facilities across Calgary."
      />
      {testimonials.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <p className="text-center text-ink-500">No testimonials available yet.</p>
      )}
    </div>
  )
}