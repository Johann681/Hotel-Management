"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      tl.fromTo(
        ".hero-headline-line",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".hero-subtext",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".hero-btn",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".hero-stat",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.2"
      );

      tl.fromTo(
        ".hero-booking-bar",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80&auto=format&fit=crop"
          alt="Luxury hotel lobby"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center py-24 md:py-32">
        <div className="hero-badge bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.48em] px-5 py-2 rounded-full mb-8 backdrop-blur-md">
          Victoria Island · Lagos
        </div>

        <h1 className="hero-headline-line overflow-hidden text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
          <span className="block">Precision Stays.</span>
        </h1>
        <h1 className="hero-headline-line overflow-hidden text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-10">
          <span className="block text-gold">Presidential Comfort.</span>
        </h1>

        <p className="hero-subtext text-base md:text-xl text-white/80 max-w-3xl mb-16 font-light">
          Premium corporate suites in the heart of Victoria Island, Lagos.
        </p>

        <div className="hero-btn flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/#rooms"
            className="inline-flex items-center justify-center rounded-sm bg-white text-hero-bg px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] shadow-soft transition-colors hover:bg-[#f7f7f7]"
          >
            Explore Rooms
          </Link>
          <Link
            href="/#amenities"
            className="inline-flex items-center justify-center rounded-sm border border-white/30 bg-white/10 text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white/15"
          >
            Our Amenities
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 border-t border-white/10 py-8 mb-14 w-full">
          {[
            { value: "200+", label: "Guests" },
            { value: "4", label: "Room Types" },
            { value: "24/7", label: "Concierge" },
            { value: "15+", label: "Years" },
          ].map((stat, index) => (
            <div key={index} className="hero-stat flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-booking-bar w-full max-w-5xl rounded-[24px] border border-white/10 bg-white p-5 shadow-soft flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col text-left gap-2">
              <span className="text-[11px] uppercase tracking-[0.4em] text-text-muted">Check-in</span>
              <input className="rounded-sm border border-border px-4 py-3 text-text-primary focus:border-blue-glow focus:outline-none" type="date" />
            </div>
            <div className="flex flex-col text-left gap-2">
              <span className="text-[11px] uppercase tracking-[0.4em] text-text-muted">Check-out</span>
              <input className="rounded-sm border border-border px-4 py-3 text-text-primary focus:border-blue-glow focus:outline-none" type="date" />
            </div>
            <div className="flex flex-col text-left gap-2">
              <span className="text-[11px] uppercase tracking-[0.4em] text-text-muted">Guests</span>
              <select className="rounded-sm border border-border px-4 py-3 text-text-primary focus:border-blue-glow focus:outline-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
          </div>
          <Link
            href="/booking"
            className="inline-flex w-full items-center justify-center rounded-sm bg-hero-bg px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-soft hover:bg-black transition-colors"
          >
            Search
          </Link>
        </div>
      </div>
    </section>
  );
}
