export type CertificateLevel = 'bronz' | 'gumus' | 'altin' | 'vize';

export interface CourseInfo {
  id: CertificateLevel;
  title: string;
  badgeTitle: string;
  levelBadgeColor: string;
  scope: string;
  targetLocations: string[];
  durationDays: number;
  totalHours: number;
  prerequisites: string[];
  physicalRequirements: string[];
  validityYears: number;
  accreditation: string[];
  highlights: string[];
  curriculumOverview: string[];
  feeEstimate: string;
  idealFor: string;
}

export interface CurriculumModule {
  id: string;
  dayNumber: number;
  title: string;
  category: 'Teorik' | 'Havuz Pratiği' | 'Açık Deniz Pratiği' | 'İlk Yardım & CPR';
  hours: number;
  summary: string;
  learningPoints: string[];
  equipmentUsed: string[];
  evaluationCriteria: string;
  image?: string;
}

export interface TrainingCohort {
  id: string;
  city: string;
  district: string;
  facility: string;
  courseType: CertificateLevel;
  startDate: string;
  endDate: string;
  totalSlots: number;
  bookedSlots: number;
  instructor: string;
  format: 'Hafta Sonu Yoğun' | 'Hafta İçi Blok' | 'Akşam & Hafta Sonu';
  status: 'Açık' | 'Son Kontenjanlar' | 'Dolu';
}

export interface CertificationStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  timing: string;
  officialEntity: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Genel' | 'Sınav & Yeterlilik' | 'Belge & e-Devlet' | 'İstihdam';
}

export type BlogCategory =
  | 'Mevzuat & Yönetmelik'
  | 'Güvenlik İpuçları'
  | 'Sektör & Kariyer'
  | 'Eğitim & Sınav';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  category: BlogCategory;
  author: {
    name: string;
    title: string;
  };
  publishedAt: string;
  readTimeMinutes: number;
  featured?: boolean;
  image: string;
  tags: string[];
  officialSource?: string;
}
