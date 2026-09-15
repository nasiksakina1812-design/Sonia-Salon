export type ServiceCategory = 'ALL' | 'HAIR' | 'SKIN' | 'MAKEUP' | 'NAILS' | 'BEAUTY';

export interface ServiceItem {
  id: string;
  category: 'HAIR' | 'SKIN' | 'MAKEUP' | 'NAILS' | 'BEAUTY';
  title: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  priceNote?: string;
  durationNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hair' | 'Makeup' | 'Nails' | 'Skin';
  image: string;
  aspect?: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  location?: string;
  service?: string;
  reviewText: string;
  date?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
