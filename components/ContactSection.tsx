"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".section-title-contact",
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

    gsap.fromTo(
      ".contact-col-left",
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );

    gsap.fromTo(
      ".contact-col-right",
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-title-contact mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center">
            <span className="text-blue-glow">05</span>{" "}
            <span className="text-gold">/ Contact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column - Info */}
          <div className="contact-col-left flex flex-col h-full">
            <h3 className="text-4xl font-bold text-text-primary mb-8">Let&apos;s Connect</h3>
            
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-blue-glow/10 p-3 rounded-full border border-blue-glow/20 text-blue-glow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-lg font-medium text-text-primary">14 Adeola Odeku Street,<br/>Victoria Island, Lagos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-glow/10 p-3 rounded-full border border-blue-glow/20 text-blue-glow">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg font-medium text-text-primary">+234 801 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-glow/10 p-3 rounded-full border border-blue-glow/20 text-blue-glow">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-lg font-medium text-text-primary">info@meridiangrand.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Iframe */}
            <div className="w-full h-64 md:h-full min-h-[250px] bg-bg-primary border border-border rounded-sm overflow-hidden flex-grow relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717641498118!2d3.415814114770381!3d6.430268595348232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e556e7%3A0xc64fd1f855325171!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1628151234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-col-right bg-bg-primary border border-border p-8 md:p-10 rounded-sm shadow-sm">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full border border-border bg-bg-primary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full border border-border bg-bg-primary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full border border-border bg-bg-primary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full border border-border bg-bg-primary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all resize-y"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gold hover:bg-yellow-600 text-white font-bold py-4 rounded-sm transition-colors mt-2 focus:ring-2 focus:ring-blue-glow focus:ring-offset-2"
              >
                Send Message ▸
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
