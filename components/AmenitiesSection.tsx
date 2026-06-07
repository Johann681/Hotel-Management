"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { amenities } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pool, gym, spa, conference] = amenities;

  useGSAP(
    () => {
      gsap.fromTo(
        ".section-title-amenities",
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
    <section ref={sectionRef} id="amenities" className="py-28 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-title-amenities mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold mb-4">03</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            World-Class Amenities
          </h2>
        </div>

        <div className="space-y-20">
          <AnimatedCard staggerIndex={0} className="relative">
            <div className="grid gap-8 lg:grid-cols-[55%_45%] items-center">
              <div className="relative rounded-[32px] overflow-hidden border border-border shadow-soft h-[420px]">
                <Image src={pool.image} alt="Pool" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-gold">Pool & Spa</p>
                <h3 className="text-4xl font-extrabold text-text-primary">
                  Unwind Above the City
                </h3>
                <p className="text-base leading-8 text-text-muted max-w-xl">
                  Our rooftop infinity pool offers panoramic views of Victoria Island and a tranquil escape tailored for corporate travelers.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['WiFi', 'Shuttle', 'Spa'].map((label) => (
                    <span key={label} className="rounded-full border border-border bg-white px-4 py-2 text-xs uppercase tracking-[0.35em] text-text-muted">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>

          <div className="grid gap-8 lg:grid-cols-[45%_55%] items-center">
            <div className="space-y-6">
              {[gym, spa, conference].map((item, index) => (
                <AnimatedCard key={item.name} staggerIndex={index + 1} className="relative">
                  <div className="grid gap-4 rounded-[28px] overflow-hidden border border-border bg-white shadow-soft">
                    <div className="relative h-52">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm uppercase tracking-[0.35em] text-gold mb-3">{item.icon} {item.name}</p>
                      <p className="text-text-muted leading-7">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
                03
              </div>
              <h3 className="text-5xl font-extrabold text-text-primary leading-tight">
                Everything You Need
              </h3>
              <p className="text-base leading-8 text-text-muted max-w-xl">
                From leisure to business, every facility at Meridian Grand is designed to feel effortless, modern, and exceptionally refined.
              </p>
              <a href="/booking" className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-[0.35em]">
                Explore All Amenities →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
