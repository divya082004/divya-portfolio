import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Sparkles, Copy, Check, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Header() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative w-full border-b-[8px] border-[#1A1A1A] bg-[#FAF9F6] py-16 md:py-24">
      {/* Editorial Watermark Grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1a1a1a08_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Editorial Header top tag */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-[#1A1A1A] pb-6 mb-12 gap-4">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A] flex items-center gap-1.5">
            <span className="h-2 w-2 bg-[#D4AF37]" />
            <span>Interactive Portfolio & Case Studies</span>
          </div>
          <nav className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A]/70">
            <span className="hover:text-[#1A1A1A] transition-colors">UX/UI Design</span>
            <span>•</span>
            <span className="hover:text-[#1A1A1A] transition-colors">Mobile Systems</span>
            <span>•</span>
            <span className="hover:text-[#1A1A1A] transition-colors">Creative Technology</span>
          </nav>
        </div>

        <div className="flex flex-col items-start gap-12 lg:grid lg:grid-cols-12 lg:items-center">
          
          {/* Main Visual Title Block */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-block px-3 py-1 border border-[#1A1A1A] text-[9px] uppercase tracking-[0.2em] font-bold bg-[#1A1A1A] text-white">
              Selected Works & Concepts
            </div>
            
            <h1 id="portfolio-title-name" className="text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] sm:text-6xl md:text-7xl leading-tight">
              <span className="block">{PERSONAL_INFO.name.split(' ')[0]}</span>
              <span className="block italic font-serif lowercase font-light text-[#D4AF37] tracking-normal -mt-2">
                & {PERSONAL_INFO.name.split(' ')[1] || "Designer"}
              </span>
            </h1>
            
            <p className="max-w-xl font-serif text-lg md:text-xl leading-relaxed text-[#333] italic">
              "Fusing meticulous, user-centered space design with highly responsive native systems to create stunning physical and digital atmospheres."
            </p>
          </div>

          {/* Contact Board Card - Redesigned to fit Editorial Theme (sharp corners, border-l primary accent box) */}
          <div className="w-full bg-white border-2 border-[#1A1A1A] p-6 shadow-[6px_6px_0px_#1A1A1A] lg:col-span-5 md:max-w-md ml-auto">
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-4 pb-2 border-b border-gray-150 flex items-center justify-between">
              <span>Identity & Communication</span>
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
            </h3>
            
            <div className="space-y-4 text-xs font-medium tracking-wide">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-bold">Location Hub</span>
                  <span className="text-[#1A1A1A]/90 text-sm font-serif">{PERSONAL_INFO.location}</span>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-bold">Contact Line</span>
                  <span className="text-[#1A1A1A]/90 text-sm font-serif">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-start gap-3">
                <Linkedin className="h-4.5 w-4.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-bold font-sans">Digital Archives</span>
                  <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-serif text-[#D4AF37] hover:text-[#1A1A1A] hover:underline transition truncate block"
                  >
                    {PERSONAL_INFO.linkedinLabel}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                <Mail className="h-4.5 w-4.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-bold">Direct Inquiry</span>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-serif text-[#1A1A1A] hover:text-[#D4AF37] hover:underline transition block truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button 
                      onClick={copyEmail}
                      className="rounded border border-[#1A1A1A] p-1 bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition cursor-pointer"
                      title="Copy Email"
                      id="btn-copy-email"
                    >
                      {copied ? <Check className="h-3 w-3 text-emerald-600 font-bold" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

