import React, { useState } from "react";
import { SKILL_GROUPS, LANGUAGES, CERTIFICATIONS } from "../data";
import { Sparkles, Terminal, Award, Palette, Settings, Languages, Check, ArrowUpRight } from "lucide-react";

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "design" | "code" | "tools">("all");

  const isSkillVisible = (category: string) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "design" && category === "UI/UX Design") return true;
    if (activeFilter === "code" && (category === "Programming & Dev" || category === "Soft Skills")) return true;
    if (activeFilter === "tools" && category === "Tools & Software") return true;
    return false;
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] border-b-2 border-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Header Title */}
        <div className="border-b border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-2">
            Skill Stack // Core Competencies
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              The Dual-Specialty Balance
            </h3>
            <p className="text-xs text-gray-600 max-w-md font-medium leading-relaxed">
              Bridging code efficiency with visual excellence. Filter the stack below to explore my core competencies.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(["all", "design", "code", "tools"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-[9px] uppercase tracking-widest font-black transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#1A1A1A] text-white border border-[#1A1A1A] shadow-[2px_2px_0px_#D4AF37]"
                  : "bg-white border border-[#1A1A1A] text-[#1A1A1A]/80 hover:bg-gray-100"
              }`}
              id={`filter-skills-${filter}`}
            >
              {filter === "all" ? "Comprehensive Stack" : filter === "design" ? "UI/UX Design" : filter === "code" ? "Coding Languages" : "Digital Tools"}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Box 1: UI/UX core design panel */}
          {isSkillVisible("UI/UX Design") && (
            <div className="md:col-span-7 border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-3">
                <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-2 text-[#1A1A1A]">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xs uppercase tracking-wider text-[#1A1A1A]">UI/UX Design Specialist</h4>
                  <p className="text-[9px] uppercase tracking-widest font-mono text-[#D4AF37] font-bold">User Research & Design Thinking</p>
                </div>
              </div>

              <p className="text-xs font-serif italic text-gray-700 leading-relaxed">
                Analyzing user pain points, mapping informational hierarchies, and building robust low-to-high fidelity interactive wireframes.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {SKILL_GROUPS.find(g => g.category === "UI/UX Design")?.skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 border border-[#1A1A1A]/30 bg-[#FAF9F6] p-2 text-xs text-[#1A1A1A] font-serif italic">
                    <span className="text-[#D4AF37] font-black shrink-0">✦</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 2: Programming Languages */}
          {isSkillVisible("Programming & Dev") && (
            <div className="md:col-span-5 border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-3">
                <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-2 text-[#1A1A1A]">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xs uppercase tracking-wider text-[#1A1A1A]">Development Languages</h4>
                  <p className="text-[9px] uppercase tracking-widest font-mono text-[#D4AF37] font-bold">Native Systems & Layout Engines</p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {SKILL_GROUPS.find(g => g.category === "Programming & Dev")?.skills.map((s) => (
                  <div key={s} className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                    <span className="text-xs font-serif font-bold text-[#1A1A1A]">{s}</span>
                    <span className="text-[8px] font-mono font-bold text-white bg-[#1A1A1A] px-1.5 py-0.5 uppercase tracking-widest">Advanced</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Graphics & Prototyping Tools */}
          {isSkillVisible("Tools & Software") && (
            <div className="md:col-span-4 border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-3">
                <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-2 text-[#1A1A1A]">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xs uppercase tracking-wider text-[#1A1A1A]">Design & Dev Tools</h4>
                  <p className="text-[9px] uppercase tracking-widest font-mono text-[#D4AF37] font-bold">Environments & Vector Systems</p>
                </div>
              </div>
              
              <p className="text-xs font-serif italic text-gray-700 leading-relaxed">
                Utilized daily to assemble interactive layouts, physical vector specs, and custom micro-animations.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {SKILL_GROUPS.find(g => g.category === "Tools & Software")?.skills.map((s) => (
                  <span key={s} className="border border-[#1A1A1A] bg-[#FAF9F6] px-2.5 py-1 text-[10px] font-mono text-[#1A1A1A]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Box 4: Certifications */}
          <div className="md:col-span-5 border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-3">
              <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-2 text-[#1A1A1A]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-sans font-black text-xs uppercase tracking-wider text-[#1A1A1A]">Verified Credentials</h4>
                <p className="text-[9px] uppercase tracking-widest font-mono text-[#D4AF37] font-bold">Earned Badges & Certifications</p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              {CERTIFICATIONS.map((c) => (
                <div key={c.name} className="flex items-start gap-2.5 text-xs">
                  <span className="text-[#D4AF37] mt-0.5 text-xs font-bold">❖</span>
                  <div>
                    <h5 className="font-serif font-bold text-[#1A1A1A] leading-tight">{c.name}</h5>
                    <p className="text-[9px] text-gray-400 font-mono tracking-wider mt-0.5 uppercase">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 5: Languages */}
          <div className="md:col-span-3 border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-3">
              <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-2 text-[#1A1A1A]">
                <Languages className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-sans font-black text-xs uppercase tracking-wider text-[#1A1A1A]">Proficiency</h4>
                <p className="text-[9px] uppercase tracking-widest font-mono text-[#D4AF37] font-bold">Spoken & Written Channels</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {LANGUAGES.map((lang) => (
                <div key={lang} className="flex items-center gap-2 border border-[#1A1A1A]/30 bg-[#FAF9F6] p-2 text-xs text-[#1A1A1A] font-serif italic font-medium">
                  <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span>{lang}</span>
                </div>
              ))}
              <div className="border-t border-[#1A1A1A]/10 pt-2.5 text-[10px] text-gray-500 leading-relaxed font-serif italic">
                Highly adapted to cross-functional global collaboration models.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

