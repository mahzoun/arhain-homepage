import type { Experience, Certification } from "@/types";

export const experiences: Experience[] = [
  {
    id: "freelance-3d",
    role: "Freelance 3D Artist",
    company: "Independent",
    period: "Jul 2024 – Present",
    current: true,
    description:
      "Creating high-quality 3D assets and character sculpts for game projects and digital media. Specializing in character design, creature sculpting, and environment art using ZBrush and Blender. Collaborating with indie developers to bring their creative visions to life.",
    tags: ["ZBrush", "Blender", "Character Design", "3D Art"],
  },
  {
    id: "teacher-ili",
    role: "English Language Teacher",
    company: "Iran Language Institute (ILI)",
    period: "Aug 2020 – Present",
    current: true,
    description:
      "Teaching English language courses across multiple proficiency levels. Developing lesson plans, assessing student progress, and fostering communicative competence. Combining academic linguistics background with practical classroom experience.",
    tags: ["Teaching", "English", "Curriculum Design", "Assessment"],
  },
];

export const certifications: Certification[] = [
  {
    id: "scrum-master",
    name: "Certified Scrum Master",
    issuer: "Universal Agile",
    issued: "May 2024",
    expires: "May 2026",
    credentialId: "001650506",
  },
];
