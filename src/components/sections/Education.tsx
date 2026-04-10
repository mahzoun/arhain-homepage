import SectionHeader from "@/components/ui/SectionHeader";
import { educations } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          subtitle="Formal study in linguistics with a research focus on syntax — informing how I think about systems, structure, and meaning in games."
        />

        <div className="max-w-2xl space-y-6">
          {educations.map((edu) => (
            <div key={edu.id} className="bg-bg-card rounded-xl p-6 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-glow border border-accent-primary/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-accent-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-text-primary">{edu.institution}</h3>
                      <p className="text-sm text-accent-primary/80 mt-0.5">
                        {edu.degree} · {edu.field}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">{edu.period}</p>
                    </div>
                    {edu.current && (
                      <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mt-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
