"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { ArtGroup } from "@/types";

interface ArtSlideshowProps {
  group: ArtGroup;
}

export default function ArtSlideshow({ group }: ArtSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + group.images.length) % group.images.length);
  }, [group.images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % group.images.length);
  }, [group.images.length]);

  // Auto-advance only when not hovered and lightbox is closed
  useEffect(() => {
    if (isHovered || lightbox) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [isHovered, lightbox, next]);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  return (
    <>
      {/* Card */}
      <div
        className="group relative bg-bg-card overflow-hidden cyber-corner card-hover"
        style={{ border: "1px solid rgba(0,212,255,0.2)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image area */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-bg-secondary cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          {group.images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`${group.title} — ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}

          {/* Scan-line overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            }}
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,212,255,0.08), transparent 60%)" }}
          />

          {/* Zoom hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono"
              style={{
                background: "rgba(0,0,0,0.75)",
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#00d4ff",
              }}
            >
              <ZoomIn size={12} />
              EXPAND
            </div>
          </div>

          {/* Arrows — stop propagation so they don't open lightbox */}
          {group.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                }}
                aria-label="Next image"
              >
                <ChevronRight size={14} />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {group.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {group.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? "16px" : "6px",
                    height: "4px",
                    borderRadius: "2px",
                    background: i === current ? "#00d4ff" : "rgba(0,212,255,0.3)",
                    boxShadow: i === current ? "0 0 6px #00d4ff" : "none",
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Counter */}
          <div
            className="absolute top-2 right-2 text-xs font-mono px-1.5 py-0.5 z-10"
            style={{
              background: "rgba(0,0,0,0.75)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00d4ff",
              fontSize: "10px",
            }}
          >
            {current + 1}/{group.images.length}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3
              className="font-bold text-sm tracking-wider uppercase"
              style={{ color: "#e8f4ff", textShadow: "0 0 8px rgba(0,212,255,0.3)" }}
            >
              {group.title}
            </h3>
            <span className="text-xs font-mono" style={{ color: "#304060" }}>
              {group.year}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {group.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 font-mono"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  color: "#00d4ff",
                  fontSize: "10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(false)}
        >
          {/* Image container */}
          <div
            className="relative"
            style={{ maxWidth: "90vw", maxHeight: "90vh", width: "100%", height: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="relative"
                style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={group.images[current]}
                  alt={`${group.title} — ${current + 1}`}
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "85vh",
                    objectFit: "contain",
                    display: "block",
                    border: "1px solid rgba(0,212,255,0.25)",
                    boxShadow: "0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(0,212,255,0.05)",
                  }}
                />
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center transition-all"
              style={{
                background: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,45,120,0.4)",
                color: "#ff2d78",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,45,120,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(255,45,120,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.8)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Nav arrows */}
            {group.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-10 h-10 flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(0,212,255,0.35)",
                    color: "#00d4ff",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.7)")}
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-10 h-10 flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(0,212,255,0.35)",
                    color: "#00d4ff",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.7)")}
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Counter */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-3 px-3 py-1 text-xs font-mono"
              style={{
                color: "#6080a0",
                marginTop: "8px",
              }}
            >
              {group.title} — {current + 1} / {group.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
