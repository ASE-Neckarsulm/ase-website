import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string[];
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Job {
  id: string;
  title: string;
  type: string; // e.g. "Vollzeit"
  location: string;
  department: string;
  image: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}