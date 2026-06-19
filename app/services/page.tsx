import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Services | Clean Max Janitorial Services Ltd.',
  description: 'Specialized medical facility cleaning services in Calgary.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-narrow py-20">
      <SectionHeading
        eyebrow="What We Do"
        title="Our Cleaning Services"
        subtitle="Detailed protocols to sanitize exam rooms, waiting areas, restrooms, and high-touch surfaces."
      />
      {services.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-center text-ink-500">No services available yet.</p>
      )}
    </div>
  )
}