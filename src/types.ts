export interface ProjectProcessStep {
  title: string;
  description: string;
  artifacts?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  tools: string[];
  description: string;
  points: string[];
  mockupType: "mobile" | "desktop";
  colorTheme: string;
  accentClass: string;
  bgGradClass: string;
  process: ProjectProcessStep[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  achievements?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
