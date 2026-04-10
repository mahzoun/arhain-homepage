interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-accent-primary text-sm font-mono font-medium tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
