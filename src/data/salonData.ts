import { ServiceItem, GalleryItem, ClientReview } from '../types';

export const salonData = {
  name: "Sonia Beauty Salon",
  phone: "07777079334",
  formattedPhone: "+91 77770 79334",
  address: "Shop No. 1, Rambhau Bhogle Marg, Opp. Saifee Park, Anjeer Wadi, Mazgaon, Thakkar Estate, Byculla, Mumbai, Maharashtra 400010",
  shortLocation: "Mazgaon, Byculla, Mumbai",
  reviewsCount: 357,
  instagramUrl: "https://www.instagram.com/sonia_beautyy_salon/?hl=en",
  instagramHandle: "@sonia_beautyy_salon",
  whatsappNumber: "917777079334",
  // Strictly adhering to PRD: "Opening hours — Contact salon for current timings"
  openingHoursNote: "Contact salon for current timings",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8256334964645!2d72.8427777!3d18.9723222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5bbf484803%3A0xb3ff760db18c7c91!2sSaifee%20Park%2C%20Mazgaon%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Sonia+Beauty+Salon+Shop+No+1+Rambhau+Bhogle+Marg+Mazgaon+Byculla+Mumbai+400010",
};

export const trustHighlights = [
  { label: "357+ Reviews", subtext: "Verified Local Clients" },
  { label: "Trusted by Local Clients", subtext: "Mazgaon & Byculla Community" },
  { label: "Beauty • Hair • Self-Care", subtext: "Curated Custom Treatments" },
  { label: "Mazgaon, Mumbai", subtext: "Opp. Saifee Park, Anjeer Wadi" }
];

export const servicesData: ServiceItem[] = [
  {
    id: "hair-cut-styling",
    category: "HAIR",
    title: "Precision Haircut & Styling",
    shortDescription: "Personalised cut tailored to your facial structure, hair texture, and everyday routine.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "hair-colour-balayage",
    category: "HAIR",
    title: "Hair Colour & Highlights",
    shortDescription: "Personalised colour designed around your style, from subtle tones to dimension highlights.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "hair-spa-botox",
    category: "HAIR",
    title: "Deep Conditioning & Hair Spa",
    shortDescription: "Nourishing therapy to restore shine, smoothen flyaways, and revitalize distressed tresses.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "skin-radiance-facial",
    category: "SKIN",
    title: "Radiance & Glow Facial",
    shortDescription: "Hydrating and revitalizing facial tailored to calm and illuminate city-tired skin.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "skin-clean-up-detox",
    category: "SKIN",
    title: "Deep Cleanse & Pore Clarifying",
    shortDescription: "Gentle exfoliation and soothing botanicals to detoxify and balance skin texture.",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e07890?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "bridal-occasion-makeup",
    category: "MAKEUP",
    title: "Bridal & Occasion Makeup",
    shortDescription: "Timeless, camera-ready bridal and festive makeup designed to highlight your natural grace.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "party-evening-makeup",
    category: "MAKEUP",
    title: "Party Glam & Event Styling",
    shortDescription: "Refined, long-lasting look customized for family celebrations, sangeets, and receptions.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "luxury-manicure-pedicure",
    category: "NAILS",
    title: "Luxury Manicure & Pedicure",
    shortDescription: "Warm soak, gentle scrub, cuticle care, and nourishing massage for tired hands and feet.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "nail-art-gel-polish",
    category: "NAILS",
    title: "Gel Polish & Nail Art",
    shortDescription: "Flawless glossy finish with understated minimalist details or celebratory nail styling.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "threading-waxing-rituals",
    category: "BEAUTY",
    title: "Threading & Gentle Waxing",
    shortDescription: "Meticulous brow shaping and gentle skin smoothing using skin-safe hygiene standards.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  },
  {
    id: "bleach-tan-removal",
    category: "BEAUTY",
    title: "De-Tan & Skin Clarifying Care",
    shortDescription: "Restorative de-tanning treatments to soothe sun exposure and revive natural complexion.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    priceNote: "Pricing on consultation"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Soft Caramel Balayage Transformation",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-2",
    title: "Editorial Bridal Elegance",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-3",
    title: "Textured Layer Cut & Volume Blowout",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-4",
    title: "Refined Pastel French Manicure",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-5",
    title: "Deep Conditioning & Gloss Therapy",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-6",
    title: "Glow & Hydration Facial Ritual",
    category: "Skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-7",
    title: "Golden Hour Glow & Soft Waves",
    category: "Hair",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-8",
    title: "Celebration Occasion Glam",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-9",
    title: "Dewy Soft Glam & Defined Brows",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-10",
    title: "Sculpted Ombre Chrome Gel Set",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-11",
    title: "Radiant Hydra Glow Facial",
    category: "Skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-12",
    title: "Minimalist Nude Gloss & Nail Art",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80"
  }
];

export const instagramMoments = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    caption: "Subtle gloss finish & healthy ends"
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    caption: "Dimensional hair styling in Mazgaon"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
    caption: "Self-care Sunday rituals"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    caption: "Relaxing spa treatment at Sonia Beauty Salon"
  }
];

export const clientReviews: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "Fatima S.",
    location: "Mazgaon Resident",
    service: "Hair Cut & Blowdry",
    reviewText: "I've been visiting Sonia Beauty Salon for my hair routine. They really listen to what you want rather than rushing through. The atmosphere is calm and you feel genuinely taken care of right in our neighbourhood.",
    date: "Recent visit"
  },
  {
    id: "rev-2",
    clientName: "Zehra M.",
    location: "Byculla Client",
    service: "Skin Care & Facial",
    reviewText: "Very welcoming staff and courteous attention to detail. My skin felt so refreshed and luminous after the session. Finding a warm, trustworthy boutique salon right near Saifee Park is a blessing.",
    date: "Recent visit"
  },
  {
    id: "rev-3",
    clientName: "Pooja K.",
    location: "South Mumbai",
    service: "Hair Colour & Highlights",
    reviewText: "They gave me the exact natural warm highlights I showed them in my reference picture. Professional service without the intimidating atmosphere of oversized commercial salons. Highly recommended!",
    date: "Recent visit"
  },
  {
    id: "rev-4",
    clientName: "Tasneem A.",
    location: "Mazgaon Resident",
    service: "Occasion Makeup & Styling",
    reviewText: "Booked an appointment for my sister's wedding reception. Makeup was elegant, natural and stayed flawless throughout the evening. Thank you to the Sonia Beauty Salon team!",
    date: "Recent visit"
  }
];

export const whyChoosePoints = [
  {
    id: "why-1",
    title: "Personalised Care",
    description: "Beauty services tailored to your individual preferences, facial contours, and lifestyle."
  },
  {
    id: "why-2",
    title: "Beauty Expertise",
    description: "A professional environment focused on quality, gentle products, and meticulous detail."
  },
  {
    id: "why-3",
    title: "Welcoming Experience",
    description: "A comfortable, serene space where you can unwind and take a tranquil moment for yourself."
  },
  {
    id: "why-4",
    title: "Local Favourite",
    description: "Proudly serving clients in Mazgaon, Byculla, Bhendi Bazaar, Dongri, and surrounding Mumbai areas."
  }
];
