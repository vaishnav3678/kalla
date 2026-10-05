import { Product } from '../types';

import heroArtImg from '../assets/images/kalaa_hero_art_1791192208276.jpg';
import wallHangingOneImg from '../assets/images/wall_hanging_one_1791192222560.jpg';
import terracottaPlateImg from '../assets/images/terracotta_plate_1791192235135.jpg';
import carvedJharokhaImg from '../assets/images/carved_jharokha_1791192253816.jpg';
import lippanWallArtImg from '../assets/images/lippan_wall_art_1791192270416.jpg';
import dhokraWallArtImg from '../assets/images/dhokra_wall_art_1791192285978.jpg';

export const BRAND_INFO = {
  name: 'KALAA VIBE',
  tagline: 'Art That Gives Your Space a Soul.',
  heroSupportingText:
    'Discover artistic and handcrafted decor pieces designed to bring character, culture and creativity into your space.',
  category: 'E-commerce website, Education, Arts & Entertainment',
  phoneDisplay: '+91 70674 79022',
  phoneNumeric: '917067479022',
  website: 'https://www.kalaavibe.com',
  websiteDisplay: 'www.kalaavibe.com',
  instagramHandle: '@kalaavibe',
  instagramUrl: 'https://www.instagram.com/kalaavibe',
  address: 'NEW, RDA Colony, Tikrapara, Mathpura, Chhattisgarh 492001, India',
  addressShort: 'Tikrapara, Mathpura, Chhattisgarh 492001',
  businessHours: '10:00 AM – 6:00 PM',
  heroImage: heroArtImg,
};

export const PRODUCTS: Product[] = [
  {
    id: 'kv-prod-01',
    name: 'Traditional Brass & Bell Wall Hanging',
    category: 'Wall Decor',
    description:
      'Artistic traditional wall-hanging decor featuring intricate metal craftsmanship and chime bells, designed to grace entryway and living walls.',
    image: wallHangingOneImg,
    additionalImages: [wallHangingOneImg, heroArtImg],
    style: 'Traditional Bell Chime Wall Accent',
    availability: 'Available on Order',
    price: null, // Displays "Enquire for Price"
    featured: true,
  },
  {
    id: 'kv-prod-02',
    name: 'Terracotta Relief Wall Art Plate',
    category: 'Artistic Pieces',
    description:
      'Earthy decorative wall plate showcasing traditional folk relief motifs and warm natural clay tones for statement feature walls.',
    image: terracottaPlateImg,
    additionalImages: [terracottaPlateImg, heroArtImg],
    style: 'Terracotta Folk Art Plate',
    availability: 'Available on Order',
    price: null,
    featured: true,
  },
  {
    id: 'kv-prod-03',
    name: 'Handcrafted Carved Jharokha Wall Decor',
    category: 'Traditional Art',
    description:
      'Architectural traditional-style wall hanging inspired by classical Indian arched windows, finished in rustic antique patina.',
    image: carvedJharokhaImg,
    additionalImages: [carvedJharokhaImg, wallHangingOneImg],
    style: 'Traditional Carved Jharokha',
    availability: 'Available on Order',
    price: null,
    featured: true,
  },
  {
    id: 'kv-prod-04',
    name: 'Traditional Lippan Mirror Work Plaque',
    category: 'Traditional Art',
    description:
      'Decorative wall art plaque combining traditional clay relief and reflective mirror work patterns that catch natural room lighting.',
    image: lippanWallArtImg,
    additionalImages: [lippanWallArtImg, heroArtImg],
    style: 'Lippan Mud & Mirror Art',
    availability: 'Available on Order',
    price: null,
    featured: true,
  },
  {
    id: 'kv-prod-05',
    name: 'Heritage Dhokra Brass Wall Art Frame',
    category: 'Wall Decor',
    description:
      'Artistic decorative wall-hanging frame presenting timeless traditional figurative metal casting mounted in a clean shadow box.',
    image: dhokraWallArtImg,
    additionalImages: [dhokraWallArtImg, carvedJharokhaImg],
    style: 'Dhokra Cast Metal Wall Art',
    availability: 'Available on Order',
    price: null,
    featured: false,
  },
  {
    id: 'kv-prod-06',
    name: 'Artistic Heritage Wall Hanging Accent',
    category: 'Home Decor',
    description:
      'Expressive decorative wall installation item blending heritage craftsmanship and modern spatial harmony.',
    image: heroArtImg,
    additionalImages: [heroArtImg, terracottaPlateImg],
    style: 'Artistic Wall Installation',
    availability: 'Available on Order',
    price: null,
    featured: false,
  },
];

export const CATEGORIES = [
  'All Pieces',
  'Wall Decor',
  'Traditional Art',
  'Home Decor',
  'Artistic Pieces',
] as const;

export const WHY_KALAA_VIBE = [
  {
    title: 'Artistic Designs',
    description:
      'Distinctive wall-hanging and traditional decor pieces chosen for visual depth, artistic expression, and spatial warmth.',
  },
  {
    title: 'Curated Collection',
    description:
      'A thoughtful collection of authentic decor items celebrating Indian cultural motifs and timeless craftsmanship.',
  },
  {
    title: 'Easy Enquiry',
    description:
      'Direct, frictionless communication via WhatsApp and phone to discuss details, dimensions, and custom queries.',
  },
  {
    title: 'Personal Assistance',
    description:
      'Attentive support from 10:00 AM to 6:00 PM to help you choose the right piece for your home or studio.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'Heritage Wall Hanging Installation',
    category: 'Wall Decor',
    image: heroArtImg,
    aspect: 'tall',
  },
  {
    id: 'g-2',
    title: 'Traditional Brass & Bell Chime',
    category: 'Wall Decor',
    image: wallHangingOneImg,
    aspect: 'square',
  },
  {
    id: 'g-3',
    title: 'Folk Motif Terracotta Wall Plate',
    category: 'Artistic Pieces',
    image: terracottaPlateImg,
    aspect: 'square',
  },
  {
    id: 'g-4',
    title: 'Architectural Carved Jharokha Decor',
    category: 'Traditional Art',
    image: carvedJharokhaImg,
    aspect: 'tall',
  },
  {
    id: 'g-5',
    title: 'Lippan Clay & Mirror Wall Plaque',
    category: 'Traditional Art',
    image: lippanWallArtImg,
    aspect: 'square',
  },
  {
    id: 'g-6',
    title: 'Cast Metal Dhokra Wall Art',
    category: 'Wall Decor',
    image: dhokraWallArtImg,
    aspect: 'square',
  },
];

export function getWhatsAppProductUrl(productName: string): string {
  const message = `Hello KALAA VIBE,\nI am interested in ${productName}.\nPlease share the price and more details.`;
  return `https://wa.me/${BRAND_INFO.phoneNumeric}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(): string {
  const message = `Hello KALAA VIBE, I would like to explore your collection and enquire about decor pieces for my space.`;
  return `https://wa.me/${BRAND_INFO.phoneNumeric}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppMultiEnquiryUrl(productNames: string[]): string {
  if (productNames.length === 1) {
    return getWhatsAppProductUrl(productNames[0]);
  }
  const itemsList = productNames.map((name, i) => `${i + 1}. ${name}`).join('\n');
  const message = `Hello KALAA VIBE,\nI am interested in the following pieces from your collection:\n\n${itemsList}\n\nPlease share the pricing, availability, and more details.`;
  return `https://wa.me/${BRAND_INFO.phoneNumeric}?text=${encodeURIComponent(message)}`;
}
