export interface Product {
  id: string;
  name: string;
  category: 'Wall Decor' | 'Traditional Art' | 'Home Decor' | 'Artistic Pieces';
  description: string;
  image: string;
  additionalImages?: string[];
  dimensions?: string;
  style?: string;
  price?: string | null; // null or undefined indicates "Enquire for Price"
  availability?: string;
  featured?: boolean;
}

export interface InquiryItem {
  product: Product;
  addedAt: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
