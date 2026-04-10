interface SkillBadgeProps {
  name: string;
  level?: "expert" | "proficient" | "familiar";
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-card border border-bg-border rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-accent-primary/50 transition-all duration-200 cursor-default">
      {level === "expert" && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
      )}
      {level === "proficient" && (
        <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 flex-shrink-0" />
      )}
      {level === "familiar" && (
        <span className="w-1.5 h-1.5 rounded-full bg-text-muted flex-shrink-0" />
      )}
      {name}
    </span>
  );
}
