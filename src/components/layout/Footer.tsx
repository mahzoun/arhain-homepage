"use client";

import { siteConfig } from "@/data/site";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#000000",
        borderTop: "1px solid rgba(0,212,255,0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bold font-mono" style={{ color: "#e8f4ff" }}>
            {siteConfig.handle}
            <span style={{ color: "#00d4ff", textShadow: "0 0 8px rgba(0,212,255,0.8)" }}>.</span>
          </p>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors"
              style={{ color: "#304060" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
            >
              <Github size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors"
              style={{ color: "#304060" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteConfig.social.itch}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="itch.io"
              className="transition-colors"
              style={{ color: "#304060" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff2d78")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#304060")}
            >
              <ExternalLink size={16} />
            </a>
          </div>

          <p className="text-xs font-mono" style={{ color: "#304060" }}>
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
