"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { menuItems } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";

export default function RestaurantSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="restaurant" className="py-24 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-title-restaurant mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            <span className="text-blue-glow">02</span>{" "}
            <span className="text-gold">/ Restaurant</span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary mt-4 mb-6">
            The Meridian Bistro
          </h3>
          <p className="text-text-muted text-lg font-medium leading-relaxed">
            Experience culinary excellence. Our master chefs craft exquisite dishes ranging from local Nigerian delicacies to international fine dining.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <AnimatedCard key={item.id} staggerIndex={i} className="h-full">
              <div className="group bg-bg-primary border border-border p-8 h-full rounded-sm flex flex-col transition-all duration-300 hover:border-blue-glow hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden">
                
                {/* Background Icon Watermark */}
                <div className="absolute -bottom-8 -right-8 text-9xl opacity-[0.03] grayscale transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <div className="text-4xl mb-6 bg-blue-glow/10 w-16 h-16 flex items-center justify-center rounded-full border border-blue-glow/20">
                  {item.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-text-primary mb-2">
                  {item.name}
                </h4>
                
                <div className="text-gold font-bold text-lg mb-4">
                  {item.priceRange}
                </div>
                
                <p className="text-text-muted mb-8 flex-grow">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-text-primary bg-bg-secondary px-3 py-1 rounded-sm border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
