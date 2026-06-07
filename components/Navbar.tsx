"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/#rooms" },
  { name: "Restaurant", href: "/#restaurant" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b border-border transition-shadow ${
        scrolled ? "shadow-soft" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-wider text-gold">
            MERIDIAN GRAND
          </span>
          <span className="text-[11px] text-text-muted tracking-[0.3em] uppercase mt-1">
            Hotel & Suites
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === "/" && link.href === "/");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors ${
                  isActive ? "text-gold" : "text-text-primary hover:text-gold"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gold transition-all ${
                    isActive ? "w-full" : "hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/auth"
            className="text-sm font-medium text-text-muted hover:text-gold transition-colors"
          >
            Login
          </Link>
          <Link
            href="/booking"
            className="bg-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-sm text-sm font-semibold transition-all focus:ring-2 focus:ring-blue-glow focus:ring-offset-2"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border px-6 py-6 flex flex-col gap-4 shadow-soft absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-primary font-semibold text-lg border-b border-border pb-3"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/auth"
            onClick={() => setIsOpen(false)}
            className="text-text-primary font-semibold text-lg pt-2"
          >
            Login
          </Link>
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="bg-gold text-white text-center py-3 rounded-sm font-semibold mt-2"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
