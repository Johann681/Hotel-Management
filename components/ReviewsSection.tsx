/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { reviews } from "@/lib/data";
import AnimatedCard from "./AnimatedCard";

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="reviews" className="py-28 bg-[#F5F5F7] border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-title-reviews mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold mb-4">04</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Guest Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <AnimatedCard key={index} staggerIndex={index} className="h-full">
              <article className="group relative overflow-hidden rounded-[28px] border border-border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-glow">
                <div className="absolute top-6 left-6 text-[5rem] text-gold/10 leading-none select-none pointer-events-none">
                  &ldquo;
                </div>
                <div className="relative z-10 flex items-center gap-2 mb-6">
                  {Array.from({ length: review.stars }).map((_, starIndex) => (
                    <span key={starIndex} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="relative z-10 text-lg italic leading-8 text-text-primary mb-10">
                  "{review.text}"
                </p>
                <div className="relative z-10 border-t border-border pt-6">
                  <p className="font-bold text-text-primary">{review.author}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-text-muted mt-1">
                    {review.role}
                  </p>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
