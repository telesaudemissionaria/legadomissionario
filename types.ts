
export interface Missionary {
  id: string;
  name: string;
  years: string;
  role: string;
  location: string;
  health: string;
  psychological: string;
  quote?: string;
  imagePlaceholder: string;
  iconName: string;
}

export interface MedicalContextItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface LegacyItem {
  name: string;
  institution: string;
  description: string;
  imagePlaceholder: string;
}
