import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Heart, Share2, Music, Bookmark, ChevronLeft, Search, Volume2, Sparkles, Check, Send } from "lucide-react";

export default function KavyaMockup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(12); // seconds
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(148);
  const [activeTab, setActiveTab] = useState<"poem" | "audio">("poem");
  const [shared, setShared] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setPlaybackTime((prev) => {
          if (prev >= 180) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((p) => p - 1);
    } else {
      setIsLiked(true);
      setLikesCount((p) => p + 1);
    }
  };

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? "0" : ""}${remaining}`;
  };

  const progressPercent = (playbackTime / 180) * 100;

  return (
    <div className="relative mx-auto w-full max-w-[290px] h-[580px] rounded-[40px] border-[10px] border-zinc-900 bg-zinc-950 p-2 shadow-2xl transition hover:scale-[1.02]">
      {/* Phone notches */}
      <div className="absolute top-4 left-1/2 h-5 w-32 -translate-x-1/2 rounded-full bg-zinc-900 z-50 flex items-center justify-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-zinc-800" />
        <div className="h-1.5 w-10 rounded-full bg-zinc-800" />
      </div>
      
      {/* Interactive App Screen Container */}
      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-amber-50/70 select-none flex flex-col pt-6 font-sans">
        
        {/* Mock Status Bar */}
        <div className="flex h-6 justify-between px-5 py-1 text-[10px] font-semibold text-amber-950/80 z-20">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <Volume2 className="h-3 w-3" />
            <div className="h-2 w-4 rounded-xs border border-amber-950/50 bg-amber-950/20" />
          </div>
        </div>

        {/* App Title Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-amber-100/50 border-b border-amber-100">
          <button className="rounded-full p-1 hover:bg-amber-100 text-amber-900" id="kavya-back">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-display font-bold text-amber-950 tracking-wider text-sm">ಕಾವ್ಯ ಕಣಜ</span>
          <button className="rounded-full p-1 hover:bg-amber-100 text-amber-900" id="kavya-search">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Content Tabs */}
        <div className="flex text-xs border-b border-amber-100 bg-white">
          <button 
            onClick={() => setActiveTab("poem")}
            className={`flex-1 py-2.5 text-center font-medium transition-colors ${activeTab === "poem" ? "text-amber-800 border-b-2 border-amber-700" : "text-gray-400 hover:text-amber-700"}`}
            id="tab-kavya-poem"
          >
            Daily Poem
          </button>
          <button 
            onClick={() => setActiveTab("audio")}
            className={`flex-1 py-2.5 text-center font-medium transition-colors ${activeTab === "audio" ? "text-amber-800 border-b-2 border-amber-700" : "text-gray-400 hover:text-amber-700"}`}
            id="tab-kavya-audio"
          >
            Audio Stream
          </button>
        </div>

        {/* Scrollable Core Screens */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          
          {activeTab === "poem" ? (
            <>
              {/* Poem Banner */}
              <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-amber-600 to-orange-600 p-4 text-white shadow-xs">
                <div className="absolute top-0 right-0 h-16 w-16 opacity-10 bg-white rounded-full translate-x-4 -translate-y-4" />
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-amber-100 mb-1">
                  <Sparkles className="h-3 w-3 text-yellow-300" />
                  <span>Poem of the Day</span>
                </div>
                <h4 className="font-display font-bold text-sm tracking-wide">ನಲ್ಮೆಯ ಕನ್ನಡಾಂಬೆ</h4>
                <p className="text-[10px] text-amber-150">By KV Puttappa (Kuvempu)</p>
              </div>

              {/* Kannada Poem Scroll deck */}
              <div className="rounded-xl border border-amber-200/60 bg-white p-4 shadow-2xs space-y-3">
                <p className="text-center font-display text-xs font-bold leading-relaxed text-amber-950">
                  ಎಲ್ಲಾದರು ಇರು ಎಂತಾದರು ಇರು,<br />
                  ಕನ್ನಡವಾಗಿ ನೀ ಇರು ಎಂದೆಂದೂ.<br />
                  ಕನ್ನಡವೇ ಸತ್ಯ, ಕನ್ನಡವೇ ನಿತ್ಯ !
                </p>
                <div className="border-t border-dashed border-amber-100 my-2" />
                <p className="text-center font-serif italic text-[10px] leading-relaxed text-gray-500">
                  "Wherever you are, however you live,<br />
                  Be a Kannadiga forever.<br />
                  Kannada is truth, Kannada is eternal!"
                </p>
              </div>

              {/* Reactive Action Panel */}
              <div className="flex items-center justify-between rounded-xl bg-amber-100/30 p-2 border border-amber-100">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-1 text-[11px] font-medium transition ${isLiked ? "text-rose-600" : "text-amber-900"}`}
                  id="kavya-like"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-rose-600" : ""}`} />
                  <span>{likesCount}</span>
                </button>

                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-1.5 rounded-lg transition ${isBookmarked ? "text-amber-700 bg-amber-150" : "text-amber-900 hover:bg-amber-100/50"}`}
                  id="kavya-bookmark"
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-amber-700" : ""}`} />
                </button>

                <button 
                  onClick={handleShare}
                  className="flex items-center gap-1 text-[11px] font-medium text-amber-900 hover:text-amber-700"
                  id="kavya-share"
                >
                  {shared ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
                  <span>{shared ? "Copied" : "Share"}</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Audio Library Panel */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-white p-2.5 border border-amber-100 shadow-3xs">
                  <div className="h-10 w-10 shrink-0 rounded-md bg-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                    🎧
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-xs text-amber-950 truncate">Kavirajamarga (ಕವಿರಾಜಮಾರ್ಗ)</h5>
                    <p className="text-[10px] text-gray-400">Classical Kannada Literature</p>
                  </div>
                  <Music className="h-4 w-4 text-amber-600 shrink-0" />
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-white p-2.5 border border-amber-100 shadow-3xs">
                  <div className="h-10 w-10 shrink-0 rounded-md bg-orange-400 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                    ✍️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-xs text-amber-950 truncate">Hachivu Kannada Deepa</h5>
                    <p className="text-[10px] text-gray-400">By DS Karki</p>
                  </div>
                  <Music className="h-4 w-4 text-amber-600 shrink-0 animate-bounce" />
                </div>
              </div>
            </>
          )}

          {/* Persistent Minimized Audio Card at the bottom of inner flow */}
          <div className="rounded-xl border border-amber-200 bg-amber-950 p-3.5 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="min-w-0">
                <h6 className="font-semibold text-[11px] tracking-wide truncate text-amber-100">Manku Thimmana Kagga</h6>
                <p className="text-[9px] text-amber-300">DV Gundappa (DVG)</p>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Simulated equalizer waves */}
                <div className="flex items-end gap-[2px] h-3">
                  <div className={`w-[2px] bg-amber-400 rounded-sm ${isPlaying ? "h-3 animate-pulse" : "h-1"}`} />
                  <div className={`w-[2px] bg-amber-400 rounded-sm ${isPlaying ? "h-2.5 animate-bounce" : "h-1.5"}`} style={{ animationDelay: "150ms" }} />
                  <div className={`w-[2px] bg-amber-400 rounded-sm ${isPlaying ? "h-3.5 animate-pulse" : "h-1"}`} style={{ animationDelay: "300ms" }} />
                  <div className={`w-[2px] bg-amber-400 rounded-sm ${isPlaying ? "h-2 animate-bounce" : "h-1.5"}`} style={{ animationDelay: "450ms" }} />
                </div>
              </div>
            </div>

            {/* Audio Progress Bar */}
            <div className="space-y-1">
              <div className="relative h-1 w-full rounded-full bg-amber-800">
                <div 
                  className="absolute h-full rounded-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[8px] text-amber-200">
                <span>{formatTime(playbackTime)}</span>
                <span>3:00</span>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex justify-center items-center gap-4 mt-2">
              <button 
                onClick={() => setPlaybackTime(Math.max(0, playbackTime - 10))}
                className="text-[10px] text-amber-200 hover:text-white"
                title="Rewind 10s"
                id="kavya-rewind"
              >
                -10s
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-450 hover:bg-amber-400 text-amber-950 transition shadow-xs"
                id="kavya-play-toggle"
              >
                {isPlaying ? <Pause className="h-4 w-4 fill-amber-950" /> : <Play className="h-4 w-4 fill-amber-950 ml-0.5" />}
              </button>

              <button 
                onClick={() => setPlaybackTime(Math.min(180, playbackTime + 10))}
                className="text-[10px] text-amber-200 hover:text-white"
                title="Forward 10s"
                id="kavya-forward"
              >
                +10s
              </button>
            </div>
          </div>

        </div>

        {/* Floating Bottom Nav Bar representation */}
        <div className="flex h-12 items-center justify-around bg-white border-t border-amber-100 text-amber-900/60 text-[10px] pb-1">
          <div className="flex flex-col items-center text-amber-800 font-bold">
            <span className="text-sm">🏠</span>
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center hover:text-amber-800">
            <span className="text-sm">📚</span>
            <span>Poets</span>
          </div>
          <div className="flex flex-col items-center hover:text-amber-800">
            <span className="text-sm">⭐️</span>
            <span>My Library</span>
          </div>
          <div className="flex flex-col items-center hover:text-amber-800">
            <span className="text-sm">⚙️</span>
            <span>Settings</span>
          </div>
        </div>

      </div>
    </div>
  );
}
