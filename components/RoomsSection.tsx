"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { rooms } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";
import Link from "next/link";
import { X, CheckCircle } from "lucide-react";

export default function RoomsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalRoom, setModalRoom] = useState<typeof rooms[0] | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".section-title-rooms",
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="rooms" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-title-rooms mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            <span className="text-blue-glow">01</span>{" "}
            <span className="text-gold">/ Rooms</span>
          </h2>
          <p className="text-text-muted mt-2 text-lg font-medium">
            Built for the executive. Designed for comfort.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, i) => (
            <AnimatedCard key={room.id} staggerIndex={i} className="h-full">
              <div className="group bg-bg-primary border border-border rounded-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-blue-glow hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                
                {/* Image Placeholder */}
                <div 
                  className="h-48 w-full flex items-center justify-center relative"
                  style={{ background: room.gradient }}
                >
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase px-3 py-1 rounded-sm border border-white/30">
                    {room.name.split(' ')[0]}
                  </div>
                  <div className="absolute top-4 right-4 bg-white shadow-md text-text-primary text-xs font-bold px-3 py-1 rounded-sm">
                    ₦{room.price.toLocaleString()}/night
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gold transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4 line-clamp-2">
                    {room.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-[10px] uppercase font-bold text-text-muted bg-bg-secondary px-2 py-1 rounded-sm border border-border">
                        {f}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="text-[10px] uppercase font-bold text-text-muted bg-bg-secondary px-2 py-1 rounded-sm border border-border">
                        +{room.features.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <button
                      onClick={() => setModalRoom(room)}
                      className="text-sm font-bold text-gold hover:text-blue-glow transition-colors flex items-center gap-1"
                    >
                      View & Book <span className="text-lg leading-none">→</span>
                    </button>
                  </div>
                </div>

              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Room Modal Overlay */}
      {modalRoom && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-hero-bg/80 backdrop-blur-sm" onClick={() => setModalRoom(null)}></div>
          <div className="relative bg-bg-primary w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-border">
            
            <button 
              onClick={() => setModalRoom(null)}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="h-48 sm:h-64 flex flex-col items-center justify-center text-white" style={{ background: modalRoom.gradient }}>
              <h2 className="text-3xl font-extrabold uppercase tracking-wider text-center drop-shadow-md px-4">
                {modalRoom.name}
              </h2>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-text-primary">Details</h3>
                <span className="text-xl font-bold text-gold">₦{modalRoom.price.toLocaleString()}<span className="text-sm text-text-muted font-normal">/night</span></span>
              </div>
              
              <p className="text-text-muted mb-8 text-lg">{modalRoom.desc}</p>

              <h4 className="font-bold text-text-primary mb-3 uppercase text-sm tracking-wider">Included Amenities</h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                {modalRoom.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-text-primary font-medium">
                    <CheckCircle size={16} className="text-blue-glow" />
                    {f}
                  </div>
                ))}
              </div>

              <Link 
                href="/booking" 
                className="block w-full bg-gold hover:bg-yellow-600 text-white text-center py-4 rounded-sm font-bold text-lg transition-colors focus:ring-2 focus:ring-blue-glow focus:ring-offset-2"
              >
                Book This Room ▸
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
