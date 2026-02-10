// Shared TypeScript types

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
  logo?: string;
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
  specialization?: string;
  minor?: string;
  societies?: string[];
};

export type Project = {
  title: string;
  blurb: string;
  impact?: string;
  tech?: string[];
  demo?: string;
  code?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
  note?: string;
};

export type Repository = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  url: string;
  topics?: string[];
};
