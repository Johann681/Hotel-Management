"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { reviews } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".section-title-reviews",
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
    <section ref={sectionRef} id="reviews" className="py-24 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-title-reviews mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center md:text-left">
            <span className="text-blue-glow">04</span>{" "}
            <span className="text-gold">/ Guest Experiences</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <AnimatedCard key={i} staggerIndex={i} className="h-full">
              <div className="group bg-bg-primary border border-border p-8 h-full rounded-sm flex flex-col relative transition-all duration-300 hover:border-blue-glow hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                
                {/* Large Quote Mark */}
                <div className="absolute top-4 left-6 text-7xl text-gold/10 font-serif leading-none select-none">
                  &ldquo;
                </div>

                <div className="flex gap-1 mb-6 mt-4 relative z-10">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-text-primary text-lg font-medium italic mb-8 flex-grow relative z-10 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                
                <div className="border-t border-border pt-4 mt-auto">
                  <h4 className="font-bold text-text-primary">{review.author}</h4>
                  <p className="text-xs text-text-muted font-semibold uppercase tracking-wider mt-1">
                    {review.role}
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
