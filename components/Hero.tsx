"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { Calendar, Users } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Badge
    tl.fromTo(
      ".hero-badge",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Headline staggered
    tl.fromTo(
      ".hero-headline-line",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );

    // Subtext
    tl.fromTo(
      ".hero-subtext",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

    // Buttons
    tl.fromTo(
      ".hero-btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );

    // Stats
    tl.fromTo(
      ".hero-stat",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.2"
    );

    // Booking Bar
    tl.fromTo(
      ".hero-booking-bar",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-hero-bg flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gold opacity-[0.05] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="hero-badge bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          🏨 Lagos · Business · Luxury
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          <div className="hero-headline-line overflow-hidden">
            <span className="block">Precision Stays.</span>
          </div>
          <div className="hero-headline-line overflow-hidden">
            <span className="block text-gold">Presidential Comfort.</span>
          </div>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light">
          Premium corporate suites in the heart of Victoria Island, Lagos.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/#rooms"
            className="hero-btn bg-gold text-white font-semibold px-8 py-3.5 rounded-sm hover:bg-yellow-600 transition-colors focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 focus:ring-offset-hero-bg"
          >
            ▸ Explore Rooms
          </Link>
          <Link
            href="/#amenities"
            className="hero-btn bg-transparent text-white font-semibold px-8 py-3.5 rounded-sm border border-white/30 hover:bg-white/10 transition-colors focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 focus:ring-offset-hero-bg"
          >
            View Amenities
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-y border-white/10 py-8 mb-12">
          {[
            { value: "200+", label: "Corporate Guests" },
            { value: "4", label: "Room Categories" },
            { value: "24/7", label: "Concierge Support" },
            { value: "15+", label: "Years of Excellence" },
          ].map((stat, i) => (
            <div key={i} className="hero-stat flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-blue-glow mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Booking Bar */}
        <div className="hero-booking-bar bg-white rounded-sm p-4 md:p-6 flex flex-col md:flex-row gap-4 items-end shadow-2xl w-full max-w-4xl mx-auto border border-border">
          <div className="flex flex-col text-left w-full">
            <label className="text-xs font-bold text-text-muted uppercase mb-1 flex items-center gap-1">
              <Calendar size={14} className="text-blue-glow" /> Check-in
            </label>
            <input
              type="date"
              className="w-full border-b border-border py-2 text-text-primary focus:outline-none focus:border-blue-glow bg-transparent"
            />
          </div>
          <div className="flex flex-col text-left w-full">
            <label className="text-xs font-bold text-text-muted uppercase mb-1 flex items-center gap-1">
              <Calendar size={14} className="text-blue-glow" /> Check-out
            </label>
            <input
              type="date"
              className="w-full border-b border-border py-2 text-text-primary focus:outline-none focus:border-blue-glow bg-transparent"
            />
          </div>
          <div className="flex flex-col text-left w-full">
            <label className="text-xs font-bold text-text-muted uppercase mb-1 flex items-center gap-1">
              <Users size={14} className="text-blue-glow" /> Guests
            </label>
            <select className="w-full border-b border-border py-2 text-text-primary focus:outline-none focus:border-blue-glow bg-transparent">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <Link
            href="/booking"
            className="w-full md:w-auto bg-text-primary hover:bg-black text-white font-semibold px-8 py-3 rounded-sm whitespace-nowrap transition-colors text-center focus:ring-2 focus:ring-blue-glow focus:ring-offset-2"
          >
            Search
          </Link>
        </div>
      </div>
    </section>
  );
}
