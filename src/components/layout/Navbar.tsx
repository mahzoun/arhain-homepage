"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(0,212,255,0.15)",
            }
          : { background: "transparent" }
      }
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => handleNavClick(e, "#")}
          >
            <span
              className="font-bold text-lg tracking-tight font-mono transition-colors"
              style={{ color: "#e8f4ff" }}
            >
              {siteConfig.handle}
              <span style={{ color: "#00d4ff", textShadow: "0 0 8px rgba(0,212,255,0.8)" }}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-xs font-mono font-medium tracking-widest uppercase transition-all duration-200"
                style={{ color: "#6080a0" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6080a0")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 px-4 py-2 text-xs font-bold font-mono tracking-widest neon-btn"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: "#6080a0" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: "rgba(0,0,0,0.97)",
            borderTop: "1px solid rgba(0,212,255,0.15)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 text-xs font-mono tracking-widest uppercase transition-colors"
                style={{ color: "#6080a0" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-full text-center px-4 py-2 text-xs font-bold font-mono tracking-widest neon-btn"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
