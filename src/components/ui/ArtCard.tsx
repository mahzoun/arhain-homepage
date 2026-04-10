import type { ArtPiece } from "@/types";
import { ExternalLink } from "lucide-react";

interface ArtCardProps {
  piece: ArtPiece;
}

export default function ArtCard({ piece }: ArtCardProps) {
  return (
    <article className="group relative bg-bg-card rounded-xl overflow-hidden glow-border card-hover">
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-bg-border to-bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-accent-glow border border-accent-primary/30 flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
            <p className="text-xs text-text-muted">Art coming soon</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Year badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-text-muted bg-bg-primary/90 px-2 py-1 rounded-md">
            {piece.year}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-text-primary text-sm group-hover:text-accent-secondary transition-colors truncate">
              {piece.title}
            </h3>
            <p className="text-xs text-accent-primary/80 font-mono mt-0.5 truncate">
              {piece.medium}
            </p>
          </div>
          {piece.projectUrl && (
            <a
              href={piece.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-text-muted hover:text-accent-secondary transition-colors"
              aria-label={`View project: ${piece.title}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        <p className="text-xs text-text-secondary leading-relaxed mt-2 line-clamp-2">
          {piece.caption}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {piece.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-1.5 py-0.5 bg-bg-border rounded text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
