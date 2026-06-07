"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { menuItems } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";

export default function RestaurantSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".section-title-restaurant",
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
    <section ref={sectionRef} id="restaurant" className="py-28 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] h-[56vh] mb-20 shadow-soft border border-border">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop"
            alt="Restaurant hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-gold mb-4">02</p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              The Meridian Bistro
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-white/80">
              Where every meal is an occasion.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {menuItems.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <AnimatedCard key={item.id} staggerIndex={index} className="relative">
                <div className={`grid gap-8 lg:grid-cols-[48%_52%] items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
                  <div className="relative h-96 rounded-[28px] overflow-hidden border border-border shadow-soft">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/25" />
                  </div>

                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.35em] text-text-primary">
                      <span className="text-4xl">{item.icon}</span>
                      {item.name}
                    </div>
                    <h3 className="text-4xl font-extrabold text-text-primary">
                      {item.id === "breakfast"
                        ? "Start Your Morning Right"
                        : item.id === "lunch"
                        ? "Fuel the Corporate Mind"
                        : "An Evening Unlike Any Other"}
                    </h3>
                    <p className="text-base leading-8 text-text-muted max-w-xl">
                      {item.desc}
                    </p>
                    <p className="text-gold font-semibold text-lg">
                      {item.priceRange}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold uppercase tracking-[0.35em] text-text-primary bg-bg-secondary border border-border rounded-full px-4 py-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
