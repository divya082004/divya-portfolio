import React, { useState, useEffect } from "react";
import { Send, CheckCircle, Database, Trash2, Mail, Users, MessageSquareCode } from "lucide-react";

interface FeedbackMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  timestamp: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [localMessages, setLocalMessages] = useState<FeedbackMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("divya_portfolio_feedback");
    if (saved) {
      try {
        setLocalMessages(JSON.parse(saved));
      } catch (err) {
        console.error("Failed parsing feedback messages", err);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !text) return;

    setSubmitting(true);
    
    setTimeout(() => {
      const newMessage: FeedbackMessage = {
        id: "msg-" + Date.now(),
        name,
        email,
        subject: subject || "General Inquiry",
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const updated = [newMessage, ...localMessages];
      setLocalMessages(updated);
      localStorage.setItem("divya_portfolio_feedback", JSON.stringify(updated));

      // Reset form variables
      setName("");
      setEmail("");
      setSubject("");
      setText("");
      
      setSubmitting(false);
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const updated = localMessages.filter(m => m.id !== id);
    setLocalMessages(updated);
    localStorage.setItem("divya_portfolio_feedback", JSON.stringify(updated));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] border-b-2 border-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Side Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#1A1A1A]/10 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
                Collaborate // Inquiries
              </h2>
              <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Let's Formulate Ideas
              </h3>
              <p className="text-gray-500 font-serif italic text-sm mt-1 leading-relaxed">
                Fill out the quick template below. Submissions will register live into the client-side system log database.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest block">Your Name *</label>
                  <input 
                    id="contact-name" 
                    type="text" 
                    required
                    placeholder="E.g., John Doe" 
                    className="w-full border border-[#1A1A1A] bg-[#FAF9F6] p-3 text-xs focus:bg-white focus:outline-hidden font-serif italic"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest block">Email Address *</label>
                  <input 
                    id="contact-email" 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full border border-[#1A1A1A] bg-[#FAF9F6] p-3 text-xs focus:bg-white focus:outline-hidden font-serif italic"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-subject" className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest block">Subject</label>
                <input 
                  id="contact-subject" 
                  type="text" 
                  placeholder="Inquiry or Project Proposal" 
                  className="w-full border border-[#1A1A1A] bg-[#FAF9F6] p-3 text-xs focus:bg-white focus:outline-hidden font-serif italic"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest block">Inquiry Particulars *</label>
                <textarea 
                  id="contact-message" 
                  rows={4}
                  required
                  placeholder="Describe your design parameters or technical outline..." 
                  className="w-full border border-[#1A1A1A] bg-[#FAF9F6] p-3 text-xs focus:bg-white focus:outline-hidden font-serif italic resize-none"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]/10">
                <p className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest">
                  * Must be filled
                </p>

                <button 
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F6] px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition disabled:bg-gray-200 disabled:text-gray-400 cursor-pointer"
                  id="btn-submit-contact-form"
                >
                  {submitting ? (
                    <span className="flex items-center gap-1.5">
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-transparent border-t-[#FAF9F6]" />
                      <span>TRANSMITTING...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 text-[#D4AF37]" />
                      <span>Transmit Package</span>
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-4 flex items-center gap-3 text-[#1A1A1A] text-xs shadow-[2px_2px_0px_#D4AF37]">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-sans font-black uppercase tracking-wider block text-[10px]">Data Registered Successfully</span>
                    <span className="block mt-0.5 text-xs text-gray-600 font-serif italic">
                      Your query has bypassed transmission bounds and logged safely inside your browser limits. Verify below.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Database Viewer Side Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="border border-[#1A1A1A] bg-[#FAF9F6] p-2 text-[#1A1A1A]">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-xs uppercase tracking-wider text-[#1A1A1A]">Local Database Log</h4>
                    <p className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">Query results catalog</p>
                  </div>
                </div>

                <span className="border border-[#1A1A1A] bg-[#1A1A1A] px-2 py-0.5 font-mono text-[9px] font-black text-[#FAF9F6] tracking-widest uppercase">
                  {localMessages.length} REG
                </span>
              </div>

              <p className="text-xs font-serif text-gray-600 italic leading-relaxed">
                A reactive client-side database ledger demonstrating dynamic state syncing & instant model triggers via standard key-value persistence.
              </p>

              <div className="space-y-3.5 max-h-[240px] overflow-y-auto pr-1">
                {localMessages.length === 0 ? (
                  <div className="text-center py-8 border border-dashed border-[#1A1A1A]/30 text-gray-400 text-xs flex flex-col items-center justify-center gap-2">
                    <MessageSquareCode className="h-6 w-6 text-gray-300" />
                    <span className="font-serif italic text-xs">No logged queries. Input criteria on the left to activate database hooks.</span>
                  </div>
                ) : (
                  localMessages.map((msg) => (
                    <div 
                      key={msg.id}
                      className="border border-[#1A1A1A] bg-[#FAF9F6] p-3.5 relative group flex items-start gap-3 transition hover:border-[#D4AF37]"
                    >
                      <div className="flex-1 min-w-0 text-[11px]">
                        <div className="flex justify-between items-baseline mb-1">
                          <h5 className="font-sans font-black uppercase text-[10px] text-[#1A1A1A] truncate pr-4">{msg.name}</h5>
                          <span className="text-[8px] text-gray-400 font-mono shrink-0">{msg.timestamp}</span>
                        </div>
                        <p className="text-[#D4AF37] font-mono text-[9px] truncate mb-1.5 uppercase font-bold">{msg.email}</p>
                        
                        <div className="bg-white border border-[#1A1A1A]/20 p-2 text-[#333] font-serif italic leading-relaxed break-words">
                          <span className="font-sans font-black text-[8px] text-[#1A1A1A] uppercase tracking-widest block mb-0.5">Subject: {msg.subject}</span>
                          {msg.text}
                        </div>
                      </div>

                      <button 
                        onClick={() => deleteMessage(msg.id)}
                        className="border border-[#1A1A1A] bg-white rounded-none p-1 text-gray-400 hover:text-white hover:bg-red-600 transition shrink-0 cursor-pointer"
                        title="Delete log entry"
                        id={`btn-del-${msg.id}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

