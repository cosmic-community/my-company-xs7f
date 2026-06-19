# Clean Max Janitorial Services Ltd.

![App Preview](https://imgix.cosmicjs.com/82d471d0-6bcb-11f1-8dfe-457508ece1b8-autopilot-photo-1551836022-d5d88e9218df-1781865724256.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A clean, modern, and responsive company website for **Clean Max Janitorial Services Ltd.**, a professional medical facilities cleaning company based in Calgary. The site highlights specialized cleaning services with a strong focus on hygiene and infection control, showcases the trained team, and shares client testimonials — all powered by [Cosmic](https://www.cosmicjs.com).

<!-- APP_OVERVIEW_START -->

# Clean Max Janitorial Services Ltd.

![App Preview](https://imgix.cosmicjs.com/7ed2bfb0-6bcb-11f1-8dfe-457508ece1b8-autopilot-photo-1538108149393-fbbd81895907-1781865717538.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

### 🎯 Application Overview
A professional, trust-building marketing website for Clean Max Janitorial Services Ltd., a Calgary-based medical facilities cleaning company. The application presents their specialized services (sanitizing exam rooms, waiting areas, restrooms, and high-touch surfaces), introduces their certified team, and builds credibility through real client testimonials.

- **Purpose:** Generate leads and establish trust for medical cleaning services
- **Audience:** Clinics, medical offices, dental practices, and healthcare facilities in Calgary

### 🎨 Design
A clean, clinical, and reassuring design language that mirrors the hygiene-focused brand. Cool teal and blue accents convey cleanliness and trust, paired with generous whitespace, crisp typography (Inter), and subtle shadows.

- Hero section with a strong value proposition and call-to-action
- Card-based grids for services, team members, and testimonials
- Fully responsive across mobile, tablet, and desktop
- Smooth hover interactions and accessible contrast

### ✨ Featured Capabilities
- 🧼 **Services Showcase** — Dynamic service cards with emoji icons, descriptions, and key features
- 👥 **Team Profiles** — Staff bios, roles, and certifications
- 💬 **Testimonials** — Client quotes with star ratings and facility names
- 📱 **Responsive Layout** — Optimized for every screen size
- ⚡ **Server-Rendered** — Fast, SEO-friendly pages via Next.js App Router
- 🔌 **Cosmic-Powered** — All content editable in the Cosmic dashboard

### 📊 Content Integration
The app reads directly from your existing Cosmic content model:
- **Services** (`services`) — service name, emoji icon, descriptions, featured image, key features
- **Team Members** (`team-members`) — name, role, bio, photo, certifications
- **Testimonials** (`testimonials`) — client name, facility, quote, rating, photo

<!-- APP_OVERVIEW_END -->

## Features
- 🧼 Services overview and individual service detail pages
- 👥 Team member directory with certifications
- 💬 Client testimonials with star ratings
- 📱 Fully responsive, mobile-first design
- ⚡ Fast server-side rendering with Next.js 16 App Router
- 🎨 Clean, healthcare-appropriate visual design with Tailwind CSS
- 🔌 Fully managed via Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a351cae5b2ac5cef3df7b66&clone_repository=6a351d9c5b2ac5cef3df7b95)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a company website with services, team members, and testimonials.
>
> User instructions: Clean Max Janitorial Services Ltd. provides professional medical facilities cleaning services in Calgary with a strong focus on hygiene and infection control. We understand the strict cleaning requirements of clinics, medical offices, and healthcare facilities. Our trained team follows detailed protocols to sanitize exam rooms, waiting areas, restrooms, and high-touch surfaces. Using approved disinfectants and proven techniques, we help maintain a safe and compliant environment. Trust Clean Max Janitorial Services Ltd. for reliable, detail-oriented medical cleaning that supports patient safety and staff well-being.
> https://cleanmaxservices.ca/service/dental-medical-facilities-cleaning-services/"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with the `services`, `team-members`, and `testimonials` object types

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd clean-max-janitorial

# Install dependencies
bun install

# Set up environment variables (see below)

# Run the dev server
bun run dev
```

Create the following environment variables in your hosting platform or local environment:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single team member
const { object: member } = await cosmic.objects
  .findOne({ type: 'team-members', slug: 'jane-doe' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three object types from your Cosmic bucket:

- **services** — `service_name`, `icon_emoji`, `short_description`, `full_details`, `featured_image`, `key_features`
- **team-members** — `full_name`, `role`, `bio`, `photo`, `certifications`
- **testimonials** — `client_name`, `facility_name`, `quote`, `rating`, `photo`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel
1. Push your code to GitHub
2. Import the repository into [Vercel](https://vercel.com)
3. Add the environment variables in the project settings
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import into [Netlify](https://netlify.com)
3. Add environment variables
4. Deploy

<!-- README_END -->