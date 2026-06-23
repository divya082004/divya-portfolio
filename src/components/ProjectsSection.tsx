import React, { useState } from "react";
import { PROJECTS } from "../data";
import { ChevronRight, ArrowRight, Sparkles, Code, ClipboardList, Figma } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import KavyaMockup from "./mockups/KavyaMockup";
import DocMockup from "./mockups/DocMockup";
import ReadSphereMockup from "./mockups/ReadSphereMockup";

export default function ProjectsSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeProcessTabIdx, setActiveProcessTabIdx] = useState(0);

  const activeProject = PROJECTS[activeProjectIdx];

  // Map each project ID to its respective mockup component
  const renderMockup = (id: string) => {
    switch (id) {
      case "kavya-kanaja":
        return <KavyaMockup />;
      case "doctor-appointment":
        return <DocMockup />;
      case "readsphere":
        return <ReadSphereMockup />;
      default:
        return <KavyaMockup />;
    }
  };

  // Switch project handler and reset process phase back to first step
  const handleProjectSwitch = (index: number) => {
    setActiveProjectIdx(index);
    setActiveProcessTabIdx(0);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b-2 border-[#1A1A1A] relative">
      {/* Subtle Editorial grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a04_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        
        {/* Section Title */}
        <div className="border-b-2 border-[#1A1A1A] pb-8 mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-2">
            Selected Works // Practical Application
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Project Case Studies <i>&</i> Prototypes
            </h3>
            <p className="text-xs text-gray-600 max-w-sm font-medium leading-relaxed">
              Interact directly with the high-fidelity mockups on the right to witness the responsive mechanics of my built interfaces.
            </p>
          </div>
        </div>

        {/* Tab Selection Row - Redesigned as Editorial Header Directory */}
        <div className="flex flex-col sm:flex-row border border-[#1A1A1A] select-none mb-10 divide-y sm:divide-y-0 sm:divide-x divide-[#1A1A1A]">
          {PROJECTS.map((proj, idx) => {
            const isActive = activeProjectIdx === idx;
            return (
              <button
                key={proj.id}
                onClick={() => handleProjectSwitch(idx)}
                className={`flex-1 text-left px-5 py-4 transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? "bg-[#1A1A1A] text-white" 
                    : "bg-[#FAF9F6] text-[#1A1A1A] hover:bg-gray-100"
                }`}
                id={`project-tab-${proj.id}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-[9px] uppercase tracking-widest font-mono block ${isActive ? "text-[#D4AF37]" : "text-gray-400"}`}>
                      Archive 0{idx + 1}
                    </span>
                    <span className="font-serif text-base font-bold leading-tight block">{proj.title}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 ${isActive ? "text-[#D4AF37]" : "text-gray-400"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Block: Case Study Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block border border-[#1A1A1A] bg-[#FAF9F6] px-3 py-0.5 text-[9px] uppercase tracking-widest font-bold text-[#1A1A1A]">
                  Role: {activeProject.role}
                </span>
                <span className="text-[#1A1A1A]/30">•</span>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                  {activeProject.mockupType === "mobile" ? "EMULATED MOBILE COMPONENT" : "EMULATED WEB PLATFORM"}
                </span>
              </div>

              <h4 className="font-serif text-3xl font-extrabold text-[#1A1A1A] italic leading-tight">
                {activeProject.title} <span className="text-gray-400 font-light block text-xl not-italic tracking-normal mt-1">— {activeProject.subtitle}</span>
              </h4>

              <p className="text-gray-700 leading-relaxed font-serif text-base">
                {activeProject.description}
              </p>

              {/* Tools Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProject.tools.map((t) => (
                  <span 
                    key={t}
                    className="border border-[#1A1A1A]/30 bg-white px-2.5 py-0.5 text-[10px] font-mono text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullets grid */}
            <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-6 space-y-4 shadow-[4px_4px_0px_#1A1A1A]">
              <h5 className="font-sans font-black text-[10px] text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#1A1A1A]/20 pb-2">
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>Impact & Accomplishments</span>
              </h5>
              <ul className="space-y-3 text-sm text-[#333] font-serif">
                {activeProject.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#D4AF37] font-bold text-base mt-[-2px]">❖</span>
                    <span className="italic">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Process Section */}
            <div className="space-y-4">
              <h5 className="font-serif text-base font-bold italic text-gray-900 border-l-2 border-[#D4AF37] pl-3">
                Methodology & Production Lifecycle
              </h5>

              {/* Process phase pills */}
              <div className="flex border border-[#1A1A1A] divide-x divide-[#1A1A1A] bg-[#FAF9F6]">
                {activeProject.process.map((step, stepId) => {
                  const isActiveStep = activeProcessTabIdx === stepId;
                  return (
                    <button
                      key={step.title}
                      onClick={() => setActiveProcessTabIdx(stepId)}
                      className={`flex-1 py-2 text-center text-[10px] uppercase tracking-widest font-bold transition-all duration-150 cursor-pointer ${
                        isActiveStep 
                          ? "bg-[#1A1A1A] text-white" 
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                      id={`process-bar-step-${stepId}`}
                    >
                      P{stepId + 1}
                    </button>
                  );
                })}
              </div>

              {/* Step info content card */}
              <div 
                className="border border-dashed border-[#1A1A1A] bg-white p-5 space-y-3"
              >
                <div className="flex items-center gap-2 pb-1 border-b border-gray-100">
                  <ClipboardList className="h-4 w-4 text-[#D4AF37]" />
                  <h6 className="font-sans font-bold uppercase tracking-wider text-[#1A1A1A] text-xs">
                    Phase 0{activeProcessTabIdx + 1}: {activeProject.process[activeProcessTabIdx].title}
                  </h6>
                </div>
                
                <p className="text-xs text-gray-600 font-serif leading-relaxed italic">
                  {activeProject.process[activeProcessTabIdx].description}
                </p>

                {/* Simulated Artifact tags produced during this phase */}
                {activeProject.process[activeProcessTabIdx].artifacts && (
                  <div className="space-y-1.5 pt-2 border-t border-dashed border-gray-100">
                    <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest font-black block">Phase Artifacts:</span>
                    <div className="flex flex-wrap gap-1">
                      {activeProject.process[activeProcessTabIdx].artifacts?.map((art) => (
                        <span key={art} className="text-[9px] bg-[#FAF9F6] border border-[#1A1A1A]/30 text-[#1A1A1A] px-2 py-0.5 font-mono">
                          ✓ {art}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Block: Live Mockup Prototype Sandbox */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 relative lg:sticky lg:top-8 shadow-[6px_6px_0px_#1A1A1A]">
            
            {/* Visual labels indicating simulated Sandbox */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 border border-[#1A1A1A] bg-[#1A1A1A] text-white px-2.5 py-0.5 text-[8px] font-mono tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span>LIVE EMULATION UNIT</span>
            </div>

            <div className="w-full pt-6 pb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-full"
                >
                  {renderMockup(activeProject.id)}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-[9px] font-mono text-gray-500 mt-2 text-center select-none uppercase tracking-widest">
              — USE DEVICE INNER HARDWARE TO RUN LIVE ACTION CHECKS —
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

