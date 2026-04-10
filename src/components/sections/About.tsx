import Image from "next/image";
import { MapPin, Gamepad2, Download } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Neon frame */}
              <div
                className="absolute -inset-[2px] rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #ff2d78)",
                  opacity: 0.6,
                  filter: "blur(1px)",
                }}
              />
              <div
                className="relative w-64 sm:w-72 rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/arhain.png"
                  alt="Mohaddeseh Mahzoun"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 256px, 288px"
                />
                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
                  }}
                />
              </div>
              {/* Corner accents */}
              <div
                className="absolute -top-1 -left-1 w-5 h-5"
                style={{ borderTop: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" }}
              />
              <div
                className="absolute -bottom-1 -right-1 w-5 h-5"
                style={{ borderBottom: "2px solid #ff2d78", borderRight: "2px solid #ff2d78" }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "#00d4ff" }}
            >
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: "#e8f4ff" }}>
              Mohaddeseh
            </h2>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-gradient"
            >
              Mahzoun
            </h2>

            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Game designer and freelance 3D artist based in Tehran, Iran.
                I create interactive experiences and visual work at the crossroads of
                storytelling, design, and craft.
              </p>
              <p>
                My work spans character sculpting in ZBrush, environment art in Blender,
                and game systems design in Godot. I care about how games <em>feel</em> —
                the weight of a mechanic, the mood of a space, the language a silhouette speaks.
              </p>
              <p>
                Graduate student in Linguistics at Shahid Beheshti University.
                Certified Scrum Master. English teacher at ILI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 mb-8">
              <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
                <MapPin size={13} style={{ color: "#00d4ff" }} />
                Tehran, Iran
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
                <Gamepad2 size={13} style={{ color: "#ff2d78" }} />
                Open to collaboration
              </div>
            </div>

            <a
              href={siteConfig.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold font-mono neon-btn rounded-none"
              style={{ letterSpacing: "0.1em" }}
            >
              <Download size={14} />
              DOWNLOAD CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
