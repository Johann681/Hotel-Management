"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { amenities } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="amenities" className="py-24 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-title-amenities mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight justify-center flex gap-2">
            <span className="text-blue-glow">03</span>{" "}
            <span className="text-gold">/ Amenities</span>
          </h2>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            World-class facilities designed to elevate your stay.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {amenities.map((item, i) => (
            <AnimatedCard key={item.name} staggerIndex={i}>
              <div className="bg-bg-primary border border-border p-6 md:p-8 rounded-sm flex items-start gap-6 transition-all duration-300 hover:border-blue-glow hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group">
                
                <div className="flex-shrink-0 text-3xl md:text-4xl bg-blue-glow/10 w-16 h-16 flex items-center justify-center rounded-full border border-blue-glow/20 group-hover:bg-blue-glow/20 transition-colors">
                  <span className="opacity-90 grayscale-[50%] group-hover:grayscale-0">{item.icon}</span>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-gold transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
