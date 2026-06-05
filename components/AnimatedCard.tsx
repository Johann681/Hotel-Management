"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { registerGSAP } from "@/lib/gsap-config";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerIndex?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  staggerIndex = 0,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    registerGSAP();

    gsap.fromTo(
      cardRef.current,
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: staggerIndex * 0.12,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}
