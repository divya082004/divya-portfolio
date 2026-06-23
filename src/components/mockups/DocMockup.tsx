import React, { useState } from "react";
import { Calendar, Clock, Star, MapPin, CheckCircle, ChevronLeft, Search, Bell, CreditCard, ChevronRight, X } from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  patients: string;
  distance: string;
  avatar: string;
}

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Aditya Sen",
    specialty: "Cardiologist",
    rating: 4.9,
    patients: "2.4K+",
    distance: "1.2 km away",
    avatar: "👨‍⚕️"
  },
  {
    name: "Dr. Ananya Rao",
    specialty: "Pediatrician",
    rating: 4.8,
    patients: "1.8K+",
    distance: "2.5 km away",
    avatar: "👩‍⚕️"
  }
];

export default function DocMockup() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState<string>("Mon 22");
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dates = [
    { label: "Mon 22", full: "Monday, June 22" },
    { label: "Tue 23", full: "Tuesday, June 23" },
    { label: "Wed 24", full: "Wednesday, June 24" },
    { label: "Thu 25", full: "Thursday, June 25" }
  ];

  const times = ["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"];

  return (
    <div className="relative mx-auto w-full max-w-[290px] h-[580px] rounded-[40px] border-[10px] border-zinc-900 bg-zinc-950 p-2 shadow-2xl transition hover:scale-[1.02]">
      {/* Phone notches */}
      <div className="absolute top-4 left-1/2 h-5 w-32 -translate-x-1/2 rounded-full bg-zinc-900 z-50 flex items-center justify-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-zinc-800" />
        <div className="h-1.5 w-10 rounded-full bg-zinc-800" />
      </div>

      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-teal-50/50 flex flex-col pt-6 font-sans">
        
        {/* Status Bar */}
        <div className="flex h-6 justify-between px-5 py-1 text-[10px] font-semibold text-teal-950/80">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[9px]">🟢 Online</span>
            <div className="h-2 w-4 rounded-xs border border-teal-950/50 bg-teal-950/20" />
          </div>
        </div>

        {/* Home Screen View */}
        {!bookingConfirmed ? (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-teal-600 font-bold">Find & Book</p>
                <h4 className="font-display font-black text-gray-900 text-sm">EcoDoc Portal</h4>
              </div>
              <div className="h-8 w-8 rounded-full bg-teal-150 flex items-center justify-center text-teal-800 text-sm">
                👤
              </div>
            </div>

            {/* Search inputs */}
            <div className="px-4 mb-3">
              <div className="relative">
                <Search className="absolute top-2.5 left-3 h-3.5 w-3.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search specialty, doctor..." 
                  className="w-full rounded-xl border border-teal-100 bg-white py-2 pl-9 pr-4 text-xs focus:border-teal-400 focus:outline-hidden"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="doc-search-query"
                />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
              
              {/* Doctor Listing (Filters if queried) */}
              <div className="space-y-2.5">
                <h5 className="font-display font-semibold text-gray-800 text-xs">Featured Specialists</h5>
                
                {DOCTORS.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.specialty.toLowerCase().includes(searchQuery.toLowerCase())).map((doc) => (
                  <div 
                    key={doc.name}
                    onClick={() => setSelectedDoctor(doc)}
                    className={`cursor-pointer rounded-xl border p-3 transition flex items-center gap-3 bg-white ${selectedDoctor.name === doc.name ? "border-teal-400 shadow-3xs" : "border-gray-150/80 hover:border-teal-200"}`}
                  >
                    <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-xl shrink-0">
                      {doc.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h6 className="font-bold text-xs text-gray-900 truncate">{doc.name}</h6>
                      <p className="text-[10px] text-gray-500">{doc.specialty}</p>
                      
                      <div className="flex items-center gap-2 mt-1 text-[9px] text-gray-400">
                        <span className="flex items-center gap-0.5 text-amber-500 font-medium">
                          <Star className="h-2.5 w-2.5 fill-amber-500 stroke-amber-500" />
                          {doc.rating}
                        </span>
                        <span>•</span>
                        <span>{doc.patients} Patients</span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-teal-600 shrink-0" />
                  </div>
                ))}
              </div>

              {/* Booking Deck with Selected Doctor */}
              <div className="rounded-xl border border-teal-100 bg-white p-3 space-y-3 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[10px] text-teal-800 font-bold">
                  <Calendar className="h-3.5 w-3.5 text-teal-600" />
                  <span>Interactive Scheduler: {selectedDoctor.name}</span>
                </div>

                {/* Accessible Date Grid Buttons */}
                <div className="grid grid-cols-4 gap-1.5">
                  {dates.map((d) => (
                    <button
                      key={d.label}
                      onClick={() => setSelectedDate(d.label)}
                      className={`rounded-lg py-2 text-center text-[10px] font-semibold transition ${selectedDate === d.label ? "bg-teal-600 text-white shadow-2xs" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
                      id={`btn-date-${d.label.replace(' ', '-')}`}
                    >
                      {d.label.split(" ")[0]}
                      <span className="block text-xs font-bold">{d.label.split(" ")[1]}</span>
                    </button>
                  ))}
                </div>

                {/* Accessible Time Slots */}
                <div className="grid grid-cols-2 gap-1.5">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`rounded-lg border py-1.5 text-center text-[10px] font-semibold transition flex items-center justify-center gap-1 ${selectedTime === t ? "border-teal-500 bg-teal-50 text-teal-800 font-black" : "border-gray-100 bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
                      id={`btn-time-${t.replace(' ', '-').replace(':', '-')}`}
                    >
                      <Clock className="h-3 w-3 text-teal-600 shrink-0" />
                      <span>{t}</span>
                    </button>
                  ))}
                </div>

                {/* CTA Action Booking Button */}
                <button 
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full mt-1.5 py-2.5 rounded-xl bg-teal-600 text-white hover:bg-teal-700 font-display font-medium text-xs text-center shadow-xs hover:shadow-md active:scale-98 transition"
                  id="btn-confirm-doctor-booking"
                >
                  Confirm Appointment
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* High Fidelity Confirmed Ticket Screen Overlay */
          <div className="flex-1 flex flex-col p-4 bg-teal-950 text-white justify-between overflow-y-auto">
            
            <div className="flex justify-end">
              <button 
                onClick={() => setBookingConfirmed(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                title="Go Back"
                id="btn-close-ticket"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="text-center space-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white mx-auto">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold text-base mt-2">Appointment Secured</h4>
              <p className="text-[10px] text-teal-300">Appointment ID: #ED-{Math.floor(Math.random() * 9000) + 1000}</p>
            </div>

            {/* Ticket Card representation */}
            <div className="rounded-2xl bg-white text-gray-900 p-4 space-y-3 relative shadow-lg my-3">
              {/* Dot Cutouts at sides */}
              <div className="absolute top-1/2 -left-2 h-4 w-4 rounded-full bg-teal-950 -translate-y-1/2" />
              <div className="absolute top-1/2 -right-2 h-4 w-4 rounded-full bg-teal-950 -translate-y-1/2" />

              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="h-10 w-10 text-xl bg-teal-50 rounded-full flex items-center justify-center">
                  {selectedDoctor.avatar}
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-900">{selectedDoctor.name}</h5>
                  <p className="text-[9px] text-teal-600 font-semibold">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[10px]">
                <div>
                  <span className="text-gray-400 block uppercase tracking-wide text-[8px]">Date Selected</span>
                  <span className="font-bold text-gray-800">{dates.find(d => d.label === selectedDate)?.full || selectedDate}</span>
                </div>
                <div>
                  <span className="text-gray-400 block uppercase tracking-wide text-[8px]">Start Time</span>
                  <span className="font-bold text-teal-700">{selectedTime}</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3 flex flex-col items-center">
                <span className="text-gray-400 text-[8px] uppercase tracking-widest mb-1.5">Verification Pass Barcode</span>
                {/* Simulated barcode */}
                <div className="flex gap-[1.5px] h-8 bg-gray-100 p-1 w-full justify-center">
                  <div className="w-[1.5px] bg-black h-full" />
                  <div className="w-[3px] bg-black h-full" />
                  <div className="w-[1px] bg-black h-full" />
                  <div className="w-[2px] bg-black h-full" />
                  <div className="w-[1px] bg-black h-full" />
                  <div className="w-[4px] bg-black h-full" />
                  <div className="w-[2px] bg-black h-full" />
                  <div className="w-[1px] bg-black h-full" />
                  <div className="w-[3px] bg-black h-full" />
                  <div className="w-[1.5px] bg-black h-full" />
                  <div className="w-[4px] bg-black h-full" />
                  <div className="w-[1px] bg-black h-full" />
                  <div className="w-[2px] bg-black h-full" />
                  <div className="w-[3px] bg-black h-full" />
                </div>
                <span className="text-[7px] text-gray-400 font-mono tracking-widest mt-1">E-DOC-PASS-CONFIRM-OK</span>
              </div>
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => setBookingConfirmed(false)}
                className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white font-medium text-xs rounded-xl transition"
                id="btn-return-booking"
              >
                Book Another Appointment
              </button>
              <p className="text-[8px] text-teal-300 text-center">To modify details, present this code at clinic reception.</p>
            </div>

          </div>
        )}

        {/* Doctor Mobile app Bottom Nav bar representation */}
        <div className="flex h-12 items-center justify-around bg-white border-t border-teal-100 text-teal-900/60 text-[10px] pb-1 shrink-0">
          <div className="flex flex-col items-center text-teal-600 font-bold">
            <span className="text-sm">🏥</span>
            <span>Clinics</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">📅</span>
            <span>History</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">💬</span>
            <span>Reminders</span>
          </div>
        </div>

      </div>
    </div>
  );
}
