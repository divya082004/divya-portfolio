import React from "react";
import { Sparkles, Compass, Cpu, Palette, Code, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function AboutPanel() {
  return (
    <section className="py-16 md:py-24 border-b-2 border-[#1A1A1A] bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Main Statement Box */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] flex items-center gap-1.5 matches-editorial">
              <span>Personal Creed // Philosophy</span>
            </h2>
            <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Fusing Intuitive Design with Native Codebases
            </h3>
            <p className="text-gray-700 leading-relaxed font-serif text-base md:text-lg italic">
              {PERSONAL_INFO.aboutMe}
            </p>
            
            {/* Design Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-4 text-center shadow-[4px_4px_0px_#1A1A1A]">
                <span className="block font-serif text-3xl font-extrabold text-[#1A1A1A]">8.04+</span>
                <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest mt-1 block">BE in CS CGPA</span>
              </div>
              <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-4 text-center shadow-[4px_4px_0px_#1A1A1A]">
                <span className="block font-serif text-3xl font-extrabold text-[#1A1A1A]">3+</span>
                <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest mt-1 block">Major Cases</span>
              </div>
            </div>
          </div>

          {/* Duality Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1: Designing with Purpose */}
            <div className="group relative border border-[#1A1A1A] bg-[#FAF9F6] p-6 shadow-[5px_5px_0px_#1A1A1A] transition-all duration-300 hover:translate-y-[-2px]">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#1A1A1A]/5 flex items-center justify-center font-serif text-[#1A1A1A]/30 text-lg font-bold">
                01
              </div>
              
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-[#1A1A1A] bg-[#1A1A1A] text-white">
                <Palette className="h-5 w-5" />
              </div>
              
              <h4 className="font-sans text-sm font-black uppercase tracking-wider text-[#1A1A1A] mb-2">
                User Experience Design
              </h4>
              <p className="text-xs text-gray-700 font-serif leading-relaxed mb-4 italic">
                Creating intuitive architectures by listening to core human frustrations. Crafting detailed mockups, mapping journeys, and testing layouts for smooth touch metrics.
              </p>
              
              <ul className="space-y-2 text-xs text-gray-600 border-t border-dashed border-[#1A1A1A]/30 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-sans">High-Fidelity Figma Prototyping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-sans">Targeted User Research & Surveys</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-sans">Accessible Layouts & Touch Targets</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Building with Precision */}
            <div className="group relative border border-[#1A1A1A] bg-[#FAF9F6] p-6 shadow-[5px_5px_0px_#1A1A1A] transition-all duration-300 hover:translate-y-[-2px]">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#1A1A1A]/5 flex items-center justify-center font-serif text-[#1A1A1A]/30 text-lg font-bold">
                02
              </div>
              
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-[#1A1A1A] bg-[#1A1A1A] text-white">
                <Code className="h-5 w-5" />
              </div>
              
              <h4 className="font-sans text-sm font-black uppercase tracking-wider text-[#1A1A1A] mb-2">
                Mobile & Web Development
              </h4>
              <p className="text-xs text-[#333] font-serif leading-relaxed mb-4 italic">
                Writing responsive, clean, and bug-free code structured with native languages. Optimizing lifecycle performance and configuring state storage engines safely.
              </p>
              
              <ul className="space-y-2 text-xs text-gray-600 border-t border-dashed border-[#1A1A1A]/30 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-sans">Kotlin & Jetpack Compose</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-sans">Real-time Firebase DB Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-sans">Clean Semantics & Media Queries</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

