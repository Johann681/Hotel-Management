"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/#rooms" },
    { name: "Restaurant", href: "/#restaurant" },
    { name: "Amenities", href: "/#amenities" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md shadow-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-wider text-gold">
            MERIDIAN GRAND
          </span>
          <span className="text-xs text-text-muted tracking-widest uppercase">
            Hotel & Suites
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href.split("/")[1]);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive
                    ? "text-gold border-b-2 border-blue-glow pb-1"
                    : "text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/auth"
            className="text-sm font-medium hover:text-gold transition-colors"
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-primary font-medium text-lg border-b border-border pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/auth"
            onClick={() => setIsOpen(false)}
            className="text-text-primary font-medium text-lg pt-2"
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
