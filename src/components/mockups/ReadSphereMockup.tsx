import React, { useState } from "react";
import { BookOpen, Award, Sliders, ChevronRight, Bookmark, CircleEllipsis, BookTemplate, Flame, RotateCcw } from "lucide-react";

type ThemeMode = "cream" | "sepia" | "charcoal" | "light";
type FontSize = "xs" | "sm" | "base" | "lg";

export default function ReadSphereMockup() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("cream");
  const [fontSize, setFontSize] = useState<FontSize>("sm");
  const [pagesRead, setPagesRead] = useState(135);
  const totalPages = 320;
  const [streak, setStreak] = useState(14);
  const [activeTab, setActiveTab] = useState<"book" | "library">("book");

  // Style mappings for fonts
  const fontStyleMap: Record<FontSize, string> = {
    xs: "text-[9px] leading-relaxed",
    sm: "text-[11px] leading-relaxed",
    base: "text-xs leading-relaxed",
    lg: "text-sm leading-relaxed"
  };

  // Styled themes for the book deck container
  const themeMap: Record<ThemeMode, { container: string, text: string, title: string }> = {
    cream: {
      container: "bg-[#FDFBF7] border-[#E8DDCD]",
      text: "text-amber-950/80",
      title: "text-amber-950 font-black"
    },
    sepia: {
      container: "bg-[#F4ECD8] border-[#DECBA4]",
      text: "text-amber-900/80",
      title: "text-amber-900 font-bold"
    },
    charcoal: {
      container: "bg-zinc-900 border-zinc-800",
      text: "text-zinc-300",
      title: "text-white font-bold"
    },
    light: {
      container: "bg-white border-gray-200",
      text: "text-gray-700",
      title: "text-gray-900 font-bold"
    }
  };

  const handleLogPages = () => {
    setPagesRead((prev) => {
      if (prev + 25 >= totalPages) {
        return totalPages;
      }
      return prev + 25;
    });
  };

  const handleReset = () => {
    setPagesRead(135);
  };

  const percentage = Math.round((pagesRead / totalPages) * 100);

  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[420px] h-[370px] rounded-2xl border-4 border-zinc-800 bg-zinc-900 p-1.5 shadow-2xl transition hover:scale-[1.01]">
      
      {/* Mock Desktop Browser Top Bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 border-b border-zinc-700 rounded-t-xl shrink-0">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <div className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        
        {/* Mock Browser URL */}
        <div className="flex-1 bg-zinc-950/60 text-[9px] text-zinc-400 py-0.5 px-3 rounded-md font-mono text-center truncate mx-12">
          https://readsphere.app/my-shelf
        </div>
      </div>

      {/* Main Grid: Sidebar + Viewport */}
      <div className="h-[330px] w-full bg-white flex overflow-hidden rounded-b-lg font-sans">
        
        {/* Sidebar Mini Column */}
        <div className="w-[85px] border-r border-gray-150 bg-gray-50 p-2.5 flex flex-col justify-between shrink-0">
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🌐</span>
              <span className="font-display font-black text-[10px] text-zinc-800">Sphere</span>
            </div>

            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab("book")}
                className={`w-full text-left rounded-lg p-1.5 text-[9px] font-semibold flex items-center gap-1.5 transition ${activeTab === "book" ? "bg-indigo-100 text-indigo-800" : "text-gray-500 hover:bg-gray-100"}`}
                id="readsphere-tab-book"
              >
                <BookOpen className="h-3 w-3" />
                <span>Reader</span>
              </button>

              <button 
                onClick={() => setActiveTab("library")}
                className={`w-full text-left rounded-lg p-1.5 text-[9px] font-semibold flex items-center gap-1.5 transition ${activeTab === "library" ? "bg-indigo-100 text-indigo-800" : "text-gray-500 hover:bg-gray-100"}`}
                id="readsphere-tab-library"
              >
                <Award className="h-3 w-3" />
                <span>Dash</span>
              </button>
            </nav>
          </div>

          <div className="rounded-lg bg-orange-50 border border-orange-100 p-1 text-center">
            <span className="text-[9px] text-orange-850 font-bold flex items-center justify-center gap-0.5">
              <Flame className="h-2.5 w-2.5 text-orange-600 fill-orange-500 shrink-0" />
              <span>{streak} Days</span>
            </span>
          </div>
        </div>

        {/* View Deck */}
        <div className="flex-1 flex flex-col bg-gray-50 p-3 overflow-hidden">
          
          {activeTab === "book" ? (
            <div className="flex-1 flex flex-col gap-2 overflow-hidden">
              {/* Controls bar */}
              <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-2 py-1 select-none shrink-0">
                {/* Font Sizes Buttons */}
                <div className="flex items-center gap-1">
                  <Sliders className="h-3 w-3 text-gray-400 shrink-0" />
                  <div className="flex bg-gray-100 rounded-sm p-[2px]">
                    {(["xs", "sm", "lg"] as FontSize[]).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setFontSize(sz)}
                        className={`text-[8px] font-bold px-1.5 py-0.5 rounded-xs uppercase transition ${fontSize === sz ? "bg-white text-indigo-700 shadow-xs" : "text-gray-500"}`}
                        id={`btn-font-${sz}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Themes list */}
                <div className="flex gap-1">
                  {(["cream", "sepia", "charcoal", "light"] as ThemeMode[]).map((tm) => (
                    <button
                      key={tm}
                      onClick={() => setThemeMode(tm)}
                      className={`h-4 w-4 rounded-full border transition-all ${
                        tm === "cream" ? "bg-[#FEFAF3]" : tm === "sepia" ? "bg-[#F4ECD8]" : tm === "charcoal" ? "bg-zinc-800" : "bg-white"
                      } ${themeMode === tm ? "ring-2 ring-indigo-500 ring-offset-1 scale-110" : "border-gray-200"}`}
                      title={`${tm} Theme`}
                      id={`btn-theme-${tm}`}
                    />
                  ))}
                </div>
              </div>

              {/* Book Deck Simulator (Interactive Typography area) */}
              <div className={`flex-1 rounded-lg border p-3 shadow-3xs overflow-y-auto transition-colors duration-300 ${themeMap[themeMode].container}`}>
                <div className="flex items-center justify-between border-b border-gray-400/20 pb-1.5 mb-2">
                  <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold">CHAPTER IV</span>
                  <Bookmark className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
                </div>
                
                <h5 className={`font-display text-xs mb-1.5 ${themeMap[themeMode].title}`}>
                  The Essence of Human Usability
                </h5>
                
                <p className={`font-serif ${fontStyleMap[fontSize]} ${themeMap[themeMode].text}`}>
                  If simple user interfaces fail to offer immediate visual feedback, users quickly develop anxiety. Designing excellent products does not imply placing buttons in every visible corner. It dictates hiding auxiliary tools, giving comfort to the scanning eyes, and maximizing high-contrast readability. Every pixel in the hierarchy must justify its space...
                </p>
              </div>
              
              {/* Bottom logger action block */}
              <div className="flex justify-between items-center bg-white border border-gray-200 p-2 rounded-lg shrink-0">
                <div className="flex-1">
                  <div className="flex justify-between text-[8px] text-gray-500 font-semibold mb-1">
                    <span>PROGRESS: {percentage}%</span>
                    <span>{pagesRead}/{totalPages} Pages</span>
                  </div>
                  <div className="relative h-1.5 w-full bg-gray-100 rounded-full">
                    <div className="absolute h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
                  </div>
                </div>
                
                <div className="flex gap-1.5 pl-3 shrink-0">
                  <button 
                    onClick={handleLogPages}
                    disabled={pagesRead >= totalPages}
                    className="px-2 py-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 text-white font-bold text-[9px] rounded-md shadow-3xs transition"
                    title="Log 25 pages"
                    id="btn-log-readsphere"
                  >
                    +25 Pages
                  </button>
                  {pagesRead > 200 && (
                    <button 
                      onClick={handleReset}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-650"
                      title="Reset progress mockup"
                      id="btn-reset-readsphere"
                    >
                      <RotateCcw className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ) : (
            /* Dashboard screen alternative view */
            <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg border border-gray-150 p-2.5 shadow-3xs text-center">
                  <span className="text-[8px] text-gray-400 block font-bold tracking-wide">COMPLETED</span>
                  <span className="font-display font-black text-indigo-700 text-base">12</span>
                  <span className="text-[7px] text-gray-500 block">Novels & Logs</span>
                </div>
                <div className="bg-white rounded-lg border border-gray-150 p-2.5 shadow-3xs text-center">
                  <span className="text-[8px] text-gray-400 block font-bold tracking-wide">READ TIME</span>
                  <span className="font-display font-black text-indigo-700 text-base">48 hrs</span>
                  <span className="text-[7px] text-gray-500 block">Total logged</span>
                </div>
              </div>

              {/* Weekly Goal Progress */}
              <div className="bg-white rounded-lg border border-gray-150 p-3 shadow-3xs space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-800">Weekly Target</span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded-sm">75% Complete</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[8px] text-gray-400">
                    <span>Goal: 4 chapters</span>
                    <span>3 / 4 completed</span>
                  </div>
                  <div className="relative h-1 w-full bg-gray-100 rounded-full">
                    <div className="absolute h-full bg-emerald-500 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>

              {/* Saved Books Grid representing bookshelf features */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-zinc-700">Currently Reading</span>
                <div className="flex items-center justify-between rounded-lg bg-orange-50/50 p-2 border border-orange-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📙</span>
                    <div>
                      <span className="font-bold text-[9px] text-zinc-800 block">The Design of Everyday Things</span>
                      <span className="text-[8px] text-gray-400 block">By Don Norman</span>
                    </div>
                  </div>
                  <button onClick={() => setActiveTab("book")} className="text-[8px] font-extrabold text-orange-700 hover:underline" id="btn-resume-readsphere">RESUME</button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
