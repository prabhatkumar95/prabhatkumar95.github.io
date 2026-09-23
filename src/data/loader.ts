import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export interface Personal {
  name: string;
  headline: string;
  bio: string;
  avatar: string;
  resume_url: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  scholar: string;
  status: {
    available: boolean;
    label: string;
    regions: string;
    details: string;
  };
}

export interface Project {
  id: string;
  title: string;
  org: string;
  period: string;
  tagline: string;
  challenge: string;
  architecture: string;
  impact: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export interface Patent {
  title: string;
  jurisdiction?: string | string[];
  jurisdictions?: string[];
  status: string;
  year: string;
  assignee: string;
  patent_number?: string;
  url?: string;
}

export function getPatentJurisdictions(patent: Patent): string[] {
  if (patent.jurisdictions && Array.isArray(patent.jurisdictions) && patent.jurisdictions.length > 0) {
    return patent.jurisdictions;
  }
  if (patent.jurisdiction) {
    if (Array.isArray(patent.jurisdiction)) {
      return patent.jurisdiction;
    }
    return [patent.jurisdiction];
  }
  return [];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
}

export interface Skills {
  research: string[];
  engineering: string[];
}

export interface BeyondTheCode {
  text: string;
  travel_familiarity: string;
  languages: Array<{ name: string; level: string }>;
}

export interface ProfileData {
  personal: Personal;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  patents: Patent[];
  publications: Publication[];
  skills: Skills;
  beyond_the_code: BeyondTheCode;
}

export function getProfileData(): ProfileData {
  const filePath = path.resolve(process.cwd(), 'src/data/profile.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as ProfileData;
}
