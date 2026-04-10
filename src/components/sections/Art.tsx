import ArtSlideshow from "@/components/ui/ArtSlideshow";
import { artGroups } from "@/data/art";

export default function Art() {
  return (
    <section id="art" className="py-24 bg-bg-secondary relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-3"
            style={{ color: "#00d4ff" }}
          >
            Visual Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            3D Art &amp;{" "}
            <span className="text-gradient">Designs</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Character sculpts, environments, and concept work — organized by series.
            Each group tells a different story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artGroups.map((group) => (
            <ArtSlideshow key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
