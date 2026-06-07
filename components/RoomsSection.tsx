"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { rooms } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";
import Link from "next/link";

export default function RoomsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="rooms" className="py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-title-rooms mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold mb-4">01</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Our Rooms
          </h2>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            Built for the executive. Designed for comfort.
          </p>
        </div>

        <div className="space-y-24">
          {rooms.map((room, index) => {
            const reversed = index % 2 === 1;
            return (
              <AnimatedCard key={room.id} staggerIndex={index} className="relative">
                <div className={`grid gap-10 lg:grid-cols-[55%_45%] items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative rounded-[32px] overflow-hidden border border-border shadow-soft bg-white min-h-[420px] ${reversed ? "lg:order-2" : ""}`}>
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute left-6 bottom-6 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.32em] text-text-primary">
                      {room.id === "standard"
                        ? "Standard"
                        : room.id === "deluxe"
                        ? "Deluxe"
                        : room.id === "executive"
                        ? "Executive"
                        : "Presidential"}{" "}
                      · From ₦{room.price.toLocaleString()}/night
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-6">
                    <span className="text-sm uppercase tracking-[0.4em] text-gold font-semibold">
                      {room.id === "standard"
                        ? "Standard"
                        : room.id === "deluxe"
                        ? "Deluxe"
                        : room.id === "executive"
                        ? "Executive"
                        : "Presidential"}
                    </span>
                    <h3 className="text-4xl font-extrabold text-text-primary">
                      {room.name}
                    </h3>
                    <p className="text-base leading-8 text-text-muted max-w-xl">
                      {room.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {room.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[10px] font-semibold uppercase tracking-[0.35em] text-text-muted bg-white border border-border rounded-full px-4 py-2"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-[0.35em]"
                    >
                      Book This Room →
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
