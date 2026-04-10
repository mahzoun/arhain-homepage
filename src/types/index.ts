export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  engine: string;
  status: "released" | "in-development" | "prototype" | "jam";
  role: string;
  tags: string[];
  screenshots: string[];
  trailerUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  coverImage: string;
  year: number;
}

export interface ArtGroup {
  id: string;
  title: string;
  images: string[];
  tags: string[];
  year: number;
}

export interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  caption: string;
  image: string;
  projectUrl?: string;
  tags: string[];
  year: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  tags: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  current: boolean;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialId: string;
}

export interface Skill {
  name: string;
  category: "3d" | "game-dev" | "methodology" | "research" | "teaching";
  level: "expert" | "proficient" | "familiar";
}
