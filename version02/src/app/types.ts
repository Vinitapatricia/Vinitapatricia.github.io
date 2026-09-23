export interface Project {
  id: string;
  title: string;
  category: 'Systems & Backend' | 'Full-Stack' | 'AI & Tooling' | 'Core CS / Low-Level';
  tagline: string;
  description: string;
  architectureDetails: string[];
  challengesSolved: string[];
  metrics: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Internship' | 'Academic' | 'Contract';
  summary: string;
  bullets: string[];
  technologies: string[];
  learnings?: string;
}

export interface Education {
  degree: string;
  major: string;
  university: string;
  expectedGraduation: string;
  gpa: string;
  honors: string[];
  coursework: {
    code: string;
    name: string;
    description: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Advanced' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface ProfileData {
  name: string;
  title: string;
  subTitle: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
  education: Education;
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
}
