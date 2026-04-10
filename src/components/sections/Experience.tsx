import SectionHeader from "@/components/ui/SectionHeader";
import { experiences, certifications } from "@/data/experience";
import { Briefcase, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Work & Certifications"
          subtitle="Professional experience across 3D art, education, and agile methodologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Experience timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 border-l border-bg-border"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                      exp.current
                        ? "bg-accent-primary border-accent-primary"
                        : "bg-bg-card border-bg-border"
                    }`}
                  />

                  <div className="bg-bg-card rounded-xl p-5 glow-border">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-glow border border-accent-primary/30 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={16} className="text-accent-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-text-primary">{exp.role}</h3>
                        <p className="text-sm text-accent-primary/80">{exp.company}</p>
                        <p className="text-xs text-text-muted mt-0.5">{exp.period}</p>
                      </div>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex-shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-bg-border rounded text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-5">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-bg-card rounded-xl p-5 glow-border">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <Award size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">{cert.name}</h4>
                      <p className="text-xs text-accent-primary/80 mt-0.5">{cert.issuer}</p>
                      <p className="text-xs text-text-muted mt-1">
                        Issued {cert.issued} · Expires {cert.expires}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
