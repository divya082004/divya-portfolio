/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import AboutPanel from "./components/AboutPanel";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceEducation from "./components/ExperienceEducation";
import ContactForm from "./components/ContactForm";
import { Sparkles, ArrowUp, Mail, Linkedin, Compass } from "lucide-react";

export default function App() {
  // Simple scroll back to top utility
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      
      {/* 1. Header (Banner & Contact details) */}
      <Header />

      <main>
        {/* 2. Core Philosophy & Double-Threat Intro */}
        <AboutPanel />

        {/* 3. Interactive Case Study Grid & Functional App Simulated Mockups */}
        <ProjectsSection />

        {/* 4. Skills Bento & IBM/Mind Matrix Certifications Grid */}
        <SkillsSection />

        {/* 5. Work Experience intern history and Education Milestones */}
        <ExperienceEducation />

        {/* 6. Reactive Contact form linked directly to localStorage */}
        <ContactForm />
      </main>

      {/* Elegant, humble, minimal footer strictly matching human styling parameters */}
      <footer className="bg-[#1A1A1A] text-white border-t-[6px] border-[#D4AF37] py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
            {/* Left Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 font-sans font-black tracking-widest text-xs uppercase text-[#D4AF37]">
                <Compass className="h-4 w-4" />
                <span>DIVYA S // ARCHIVE DIRECTORY</span>
              </div>
              <p className="text-xs text-gray-300 font-serif italic max-w-sm">
                A digital catalog highlighting the synergy representing a Bachelor of Engineering in Computer Science and Design.
              </p>
            </div>

            {/* Right Block */}
            <div className="flex flex-wrap gap-4 text-xs font-mono tracking-wider">
              <a 
                href="mailto:divyashankar004@gmail.com" 
                className="hover:text-[#D4AF37] transition"
              >
                divyashankar004@gmail.com
              </a>
              <span className="text-[#D4AF37]">|</span>
              <a 
                href="https://linkedin.com/in/divya-s-9b1070338" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#D4AF37] navigator-link transition"
              >
                LinkedIn Catalog
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 text-[9px] text-gray-400 font-mono tracking-widest uppercase">
            <span>
              &copy; {new Date().getFullYear()} Divya S. All Rights Reserved. Made in React & Tailwind.
            </span>

            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest bg-transparent border border-white hover:bg-white hover:text-[#1A1A1A] px-4 py-2 transition cursor-pointer"
              id="btn-scroll-top-footer"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="h-3.5 w-3.5 text-[#D4AF37]" />
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}

