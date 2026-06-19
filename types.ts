// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Services object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    icon_emoji?: string;
    short_description?: string;
    full_details?: string;
    featured_image?: CosmicImage;
    key_features?: string[];
  };
}

// Team Members object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    bio?: string;
    photo?: CosmicImage;
    certifications?: string[];
  };
}

// Testimonials object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    facility_name?: string;
    quote?: string;
    rating?: number;
    photo?: CosmicImage;
  };
}

// API response shape
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}