import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "ZBrush", category: "3d", level: "expert" },
  { name: "3D Modeling", category: "3d", level: "expert" },
  { name: "Character Design", category: "3d", level: "expert" },
  { name: "Blender", category: "3d", level: "proficient" },
  { name: "Substance Painter", category: "3d", level: "proficient" },
  { name: "Game Design", category: "game-dev", level: "expert" },
  { name: "Godot Engine", category: "game-dev", level: "proficient" },
  { name: "Level Design", category: "game-dev", level: "proficient" },
  { name: "GDScript", category: "game-dev", level: "proficient" },
  { name: "Scrum", category: "methodology", level: "expert" },
  { name: "Agile Methodologies", category: "methodology", level: "expert" },
  { name: "Project Management", category: "methodology", level: "proficient" },
  { name: "Linguistics Research", category: "research", level: "expert" },
  { name: "Syntax Analysis", category: "research", level: "expert" },
  { name: "English Teaching", category: "teaching", level: "expert" },
  { name: "Curriculum Design", category: "teaching", level: "proficient" },
];

export const skillCategories = {
  "3d": { label: "3D & Art", color: "text-violet-400" },
  "game-dev": { label: "Game Development", color: "text-indigo-400" },
  methodology: { label: "Methodology", color: "text-sky-400" },
  research: { label: "Research", color: "text-teal-400" },
  teaching: { label: "Teaching", color: "text-emerald-400" },
};
