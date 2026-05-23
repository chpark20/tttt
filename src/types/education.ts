export interface Course {
  id: string;
  slug: string;
  name: { ko: string; en: string };
  description: { ko: string; en: string };
  ageGroup: 'kids' | 'teens' | 'adults' | 'corporate';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  schedule: { ko: string; en: string };
  price: { krw: number; usd: number };
  thumbnail: string;
  features: { icon: string; title: { ko: string; en: string }; description: { ko: string; en: string } }[];
  curriculum: { title: { ko: string; en: string }; description: { ko: string; en: string } }[];
}

export interface LearningContent {
  id: string;
  slug: string;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  category: 'video' | 'document' | 'interactive';
  thumbnail: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface Program {
  id: string;
  slug: string;
  name: { ko: string; en: string };
  description: { ko: string; en: string };
  type: 'camp' | 'workshop' | 'field-trip' | 'competition';
  ageGroup: string;
  duration: string;
  location: { ko: string; en: string };
  thumbnail: string;
  highlights: { ko: string; en: string }[];
}

export interface Instructor {
  id: string;
  name: { ko: string; en: string };
  title: { ko: string; en: string };
  bio: { ko: string; en: string };
  specialties: string[];
  image: string;
}

export interface EduFAQItem {
  id: string;
  question: { ko: string; en: string };
  answer: { ko: string; en: string };
  category: 'general' | 'courses' | 'programs' | 'payment';
}
