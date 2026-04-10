"use client";

import { siteConfig } from "@/data/site";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "#00d4ff",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/arhain",
      href: siteConfig.social.github,
      color: "#e8f4ff",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohaddeseh-mahzoun",
      href: siteConfig.social.linkedin,
      color: "#00d4ff",
    },
    {
      icon: ExternalLink,
      label: "itch.io",
      value: "arhain.itch.io",
      href: siteConfig.social.itch,
      color: "#ff2d78",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-3"
            style={{ color: "#00d4ff" }}
          >
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Let&apos;s{" "}
            <span className="text-gradient">build something</span>
          </h2>
          <p className="text-text-secondary text-sm font-mono mb-10">
            Looking for a 3D artist, game dev collaborator, or just want to talk design?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 p-4 card-hover"
                style={{
                  background: "#0a0e1a",
                  border: "1px solid rgba(0,212,255,0.12)",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${color}60`;
                  el.style.boxShadow = `0 0 20px ${color}15`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(0,212,255,0.12)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    border: `1px solid ${color}40`,
                    background: `${color}0d`,
                    color,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono" style={{ color: "#304060" }}>
                    {label}
                  </p>
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: "#e8f4ff" }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CV download */}
          <div
            className="mt-8 p-5 flex items-center justify-between gap-4 flex-wrap"
            style={{
              background: "#0a0e1a",
              border: "1px dashed rgba(0,212,255,0.25)",
            }}
          >
            <div className="text-left">
              <p className="text-sm font-bold font-mono" style={{ color: "#e8f4ff" }}>
                Download CV
              </p>
              <p className="text-xs font-mono mt-0.5" style={{ color: "#304060" }}>
                Full resume · PDF
              </p>
            </div>
            <a
              href={siteConfig.cvUrl}
              download
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold font-mono tracking-widest neon-btn-solid"
            >
              <Download size={14} />
              DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
