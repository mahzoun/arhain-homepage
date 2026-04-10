import Image from "next/image";
import type { Game } from "@/types";
import { Github, ExternalLink, Play } from "lucide-react";

interface GameCardProps {
  game: Game;
}

const statusConfig = {
  released: { label: "RELEASED", color: "#00ff88", bg: "rgba(0,255,136,0.1)", border: "rgba(0,255,136,0.3)" },
  "in-development": { label: "IN DEV", color: "#00d4ff", bg: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.3)" },
  prototype: { label: "PROTOTYPE", color: "#bf00ff", bg: "rgba(191,0,255,0.1)", border: "rgba(191,0,255,0.3)" },
  jam: { label: "GAME JAM", color: "#ff2d78", bg: "rgba(255,45,120,0.1)", border: "rgba(255,45,120,0.3)" },
};

export default function GameCard({ game }: GameCardProps) {
  const status = statusConfig[game.status];

  return (
    <article
      className="group relative overflow-hidden card-hover"
      style={{
        background: "#0a0e1a",
        border: "1px solid rgba(0,212,255,0.15)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,212,255,0.45)";
        el.style.boxShadow = "0 0 30px rgba(0,212,255,0.1), 0 0 60px rgba(0,212,255,0.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,212,255,0.15)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden" style={{ background: "#06080f" }}>
        {game.coverImage ? (
          <Image
            src={game.coverImage}
            alt={game.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => {/* silently fail, fallback shown below */}}
          />
        ) : null}

        {/* Fallback / overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: game.coverImage
              ? "linear-gradient(to top, #0a0e1a 0%, transparent 40%)"
              : "linear-gradient(135deg, #0a0e1a 0%, #06080f 100%)",
          }}
        >
          {!game.coverImage && (
            <div className="text-center">
              <div
                className="w-14 h-14 mx-auto mb-2 flex items-center justify-center"
                style={{
                  border: "1px solid rgba(0,212,255,0.3)",
                  background: "rgba(0,212,255,0.05)",
                }}
              >
                <span className="text-2xl">🎮</span>
              </div>
              <p className="text-xs font-mono" style={{ color: "#304060" }}>No preview</p>
            </div>
          )}
        </div>

      </div>

      <div className="p-5">
        <div className="mb-1">
          <span
            className="text-xs font-mono"
            style={{ color: "#304060" }}
          >
            {game.genre} · {game.engine}
          </span>
        </div>
        <h3
          className="text-base font-bold mb-2 transition-colors duration-200"
          style={{ color: "#e8f4ff" }}
        >
          {game.title}
        </h3>
        <p
          className="text-xs leading-relaxed mb-3 line-clamp-3 font-mono"
          style={{ color: "#6080a0" }}
        >
          {game.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 font-mono"
              style={{
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "#6080a0",
                fontSize: "10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-4 pt-3"
          style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}
        >
          {game.demoUrl && (
            <a
              href={game.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold font-mono tracking-wider transition-colors"
              style={{ color: "#00d4ff" }}
              onMouseEnter={(e) => (e.currentTarget.style.textShadow = "0 0 8px rgba(0,212,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.textShadow = "none")}
            >
              <Play size={12} />
              PLAY
            </a>
          )}
          {game.githubUrl && (
            <a
              href={game.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-colors"
              style={{ color: "#304060" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8f4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
            >
              <Github size={12} />
              Source
            </a>
          )}
          {game.trailerUrl && (
            <a
              href={game.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-colors"
              style={{ color: "#304060" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8f4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
            >
              <ExternalLink size={12} />
              Trailer
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
