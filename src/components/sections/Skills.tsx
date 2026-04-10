import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  const grouped = Object.entries(skillCategories).map(([key, meta]) => ({
    key,
    ...meta,
    skills: skills.filter((s) => s.category === key),
  }));

  return (
    <section id="skills" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="What I Work With"
          subtitle="A toolkit built across 3D art, game development, agile practice, research, and teaching."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {grouped.map((group) => (
            <div key={group.key} className="bg-bg-card rounded-xl p-6 glow-border">
              <h3 className={`text-xs font-mono font-semibold uppercase tracking-widest mb-4 ${group.color}`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-8 text-xs text-text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            Expert
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-500/60" />
            Proficient
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-text-muted" />
            Familiar
          </div>
        </div>
      </div>
    </section>
  );
}
