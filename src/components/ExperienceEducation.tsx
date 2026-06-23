import React from "react";
import { EXPERIENCE, EDUCATION } from "../data";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, Award } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <section className="py-16 md:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Left Block: Internship Experience (Timeline) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-[#1A1A1A]/10 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
                Professional Archives // Work Experience
              </h2>
              <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Internship Tenure
              </h3>
              <p className="text-gray-500 font-serif italic text-sm mt-1 leading-relaxed">
                Applying classroom principles in commercial mobile pipelines.
              </p>
            </div>

            <div className="relative border-l-2 border-[#1A1A1A] pl-6 ml-2 space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <div key={exp.company + index} className="relative group">
                  {/* Timeline bullet handle - Editorial square accent */}
                  <div className="absolute -left-[31px] top-1.5 flex h-[10px] w-[10px] items-center justify-center border border-[#1A1A1A] bg-[#FAF9F6] transition group-hover:bg-[#D4AF37] shrink-0" />
                  
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 border border-[#1A1A1A]/30 bg-[#FAF9F6] text-[#1A1A1A] text-[9px] font-mono font-bold px-2.5 py-0.5 uppercase tracking-widest">
                      <Calendar className="h-3 w-3 shrink-0" />
                      <span>{exp.period}</span>
                    </span>

                    <h4 className="font-sans text-lg font-black text-[#1A1A1A] leading-snug">
                      {exp.role}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono tracking-wider">
                      <span className="flex items-center gap-1 text-gray-700">
                        <Briefcase className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <span>{exp.company}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-gray-750 pt-2 leading-relaxed font-serif italic">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Education Journey */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-[#1A1A1A]/10 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
                Academic Foundation // Credentials
              </h2>
              <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Education History
              </h3>
              <p className="text-gray-500 font-serif italic text-sm mt-1 leading-relaxed">
                Combining traditional systems engineering with visual design logic.
              </p>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div 
                  key={edu.degree}
                  className="border-2 border-[#1A1A1A] bg-[#FAF9F6] p-6 shadow-[5px_5px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_#D4AF37] transition-all duration-250 relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-10 w-10 border border-[#1A1A1A] bg-white flex items-center justify-center text-[#1A1A1A] shrink-0">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[8px] text-white bg-[#1A1A1A] px-2 py-0.5 font-mono font-bold tracking-widest uppercase float-right">{edu.period}</span>
                      <h4 className="font-sans font-black text-[#1A1A1A] text-sm leading-snug pr-16">{edu.degree}</h4>
                      <p className="text-xs text-gray-600 font-serif italic mt-1 font-semibold">{edu.institution}</p>
                    </div>
                  </div>

                  {/* CGPA display status */}
                  <div className="flex items-center gap-1.5 border border-dashed border-[#1A1A1A]/30 bg-white p-2.5 text-xs font-mono mb-3">
                    <Award className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span className="font-bold text-[#1A1A1A] uppercase tracking-wide">CGPA:</span>
                    <span className="font-black text-white bg-[#1A1A1A] px-1.5 py-0.5 rounded-sm">{edu.gpa}</span>
                  </div>

                  {edu.achievements && (
                    <ul className="space-y-1.5 text-xs text-gray-700 leading-relaxed font-serif italic border-t border-[#1A1A1A]/10 pt-3">
                      {edu.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
