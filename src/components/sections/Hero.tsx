"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Github, Linkedin, ExternalLink, ArrowDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ["#00d4ff", "#ff2d78", "#00ff88", "#bf00ff"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${(1 - dist / 100) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Neon gradient accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 80% 50%, rgba(255,45,120,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-24">

          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-5 opacity-0 animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards]"
              style={{ color: "#00d4ff", textShadow: "0 0 10px rgba(0,212,255,0.6)" }}
            >
              // Game Designer &amp; 3D Artist
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 opacity-0 animate-slide-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <span className="text-text-primary">Mohaddeseh</span>
              <br />
              <span className="text-gradient">Mahzoun</span>
            </h1>

            <p className="text-sm text-text-secondary max-w-lg leading-relaxed mb-8 opacity-0 animate-slide-up [animation-delay:600ms] [animation-fill-mode:forwards] font-mono">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-slide-up [animation-delay:800ms] [animation-fill-mode:forwards]">
              <a
                href="#games"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#games")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 text-sm font-bold font-mono neon-btn-solid rounded-none tracking-widest"
              >
                VIEW GAMES
              </a>
              <a
                href="#art"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#art")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 text-sm font-bold font-mono neon-btn tracking-widest"
              >
                VIEW ART
              </a>
            </div>

            <div className="flex items-center gap-5 mt-8 opacity-0 animate-fade-in [animation-delay:1000ms] [animation-fill-mode:forwards]">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#304060" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#304060" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.social.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#304060" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff2d78")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
                aria-label="itch.io"
              >
                <ExternalLink size={20} />
              </a>

              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: "linear-gradient(to right, rgba(0,212,255,0.4), transparent)" }}
              />
              <span className="text-xs font-mono" style={{ color: "#304060" }}>
                {siteConfig.location}
              </span>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 lg:w-full lg:max-w-sm xl:max-w-md">
              <div
                className="relative"
                style={{
                  aspectRatio: "3/4",
                  maskImage: "radial-gradient(ellipse 70% 75% at 50% 42%, black 10%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 60%, transparent 80%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 75% at 50% 42%, black 10%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 60%, transparent 80%)",
                }}
              >
                <Image
                  src="/images/arhain.png"
                  alt="Mohaddeseh Mahzoun"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 320px, 420px"
                />
              </div>
              {/* Neon glow underneath */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center bottom, rgba(0,212,255,0.15) 0%, transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-float"
        style={{ color: "#304060" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
