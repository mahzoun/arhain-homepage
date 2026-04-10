"use client";

import { useState } from "react";
import GameCard from "@/components/ui/GameCard";
import { games } from "@/data/games";
import type { Game } from "@/types";

const ALL = "all";
const statuses = [ALL, "released", "in-development", "prototype", "jam"] as const;
const statusLabels: Record<string, string> = {
  all: "ALL",
  released: "RELEASED",
  "in-development": "IN DEV",
  prototype: "PROTOTYPE",
  jam: "JAM",
};

export default function Games() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL);

  const filtered: Game[] =
    activeFilter === ALL
      ? games
      : games.filter((g) => g.status === activeFilter);

  return (
    <section id="games" className="py-24 bg-bg-primary relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-3"
            style={{ color: "#ff2d78" }}
          >
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Games{" "}
            <span
              style={{
                color: "#ff2d78",
                textShadow: "0 0 20px rgba(255,45,120,0.5)",
              }}
            >
              Designed
            </span>
          </h2>
          <p className="text-text-secondary text-sm font-mono max-w-xl">
            From arcade prototypes to adventure games — each project built in Godot, designed solo.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setActiveFilter(s)}
              className="px-3 py-1.5 text-xs font-mono font-bold tracking-wider transition-all duration-200"
              style={
                activeFilter === s
                  ? {
                      background: "rgba(255,45,120,0.15)",
                      border: "1px solid rgba(255,45,120,0.5)",
                      color: "#ff2d78",
                      textShadow: "0 0 8px rgba(255,45,120,0.6)",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(0,212,255,0.15)",
                      color: "#304060",
                    }
              }
            >
              {statusLabels[s]}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-text-muted text-center py-12 font-mono">
            // No projects in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
