"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { rooms } from "@/lib/data";

export default function BookingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomId: "standard",
    guests: "2 Adults",
    payment: "Credit/Debit Card"
  });

  const selectedRoom = rooms.find(r => r.id === formData.roomId) || rooms[0];
  const [nights, setNights] = useState(1);

  // Set default dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setFormData(prev => ({
      ...prev,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0]
    }));
  }, []);

  // Calculate nights
  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      const ci = new Date(formData.checkIn);
      const co = new Date(formData.checkOut);
      if (co > ci) {
        const diffTime = Math.abs(co.getTime() - ci.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setNights(diffDays || 1);
      } else {
        setNights(1);
      }
    }
  }, [formData.checkIn, formData.checkOut]);

  // Pricing
  const subtotal = selectedRoom.price * nights;
  const vat = subtotal * 0.075;
  const total = subtotal + vat;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".booking-back",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );

    tl.fromTo(
      ".booking-left",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".booking-right",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple shake validation
    if (!formData.name || !formData.email || !formData.phone) {
      gsap.fromTo(
        ".booking-form-wrapper",
        { x: -10 },
        { x: 10, duration: 0.1, yoyo: true, repeat: 5, clearProps: "x" }
      );
      return;
    }

    setIsConfirmed(true);
    
    // Animate overlay
    setTimeout(() => {
      gsap.fromTo(
        ".confirm-overlay-content",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }, 50);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-28 pb-20 bg-bg-secondary px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/" className="booking-back flex items-center gap-2 text-text-muted hover:text-gold transition-colors font-semibold">
            <ArrowLeft size={20} /> Back
          </Link>
          <div className="font-mono text-gold bg-gold/10 px-4 py-1.5 rounded-sm border border-gold/30 text-sm font-bold tracking-widest">
            MGH://booking
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Left - Form */}
          <div className="booking-left lg:col-span-3 booking-form-wrapper">
            <div className="bg-bg-primary border border-border p-8 md:p-10 rounded-sm shadow-sm">
              <h1 className="text-3xl font-bold mb-8 text-text-primary">Guest Details</h1>
              
              <form onSubmit={handleConfirm} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Check-in</label>
                    <input required name="checkIn" value={formData.checkIn} onChange={handleInputChange} type="date" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Check-out</label>
                    <input required name="checkOut" value={formData.checkOut} onChange={handleInputChange} type="date" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Room Type</label>
                    <select name="roomId" value={formData.roomId} onChange={handleInputChange} className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all">
                      {rooms.map(r => (
                        <option key={r.id} value={r.id}>{r.name} — ₦{r.price.toLocaleString()}/night</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Guests</label>
                    <select name="guests" value={formData.guests} onChange={handleInputChange} className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Payment Method</label>
                    <select name="payment" value={formData.payment} onChange={handleInputChange} className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all">
                      <option>Credit/Debit Card</option>
                      <option>Bank Transfer</option>
                      <option>Mobile Payment</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-gold hover:bg-yellow-600 text-white font-bold py-4 rounded-sm transition-all mt-6 text-lg focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 flex justify-center items-center gap-2">
                  Confirm Booking <span className="text-xl leading-none">▸</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="booking-right lg:col-span-2">
            <div className="bg-bg-primary border border-border p-8 rounded-sm shadow-sm sticky top-28">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">Live Summary</h2>
              
              <div 
                className="w-full h-40 mb-6 flex items-center justify-center rounded-sm transition-all duration-500"
                style={{ background: selectedRoom.gradient }}
              >
                <span className="text-white font-bold text-xl drop-shadow-md uppercase tracking-wider">{selectedRoom.name}</span>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between pb-4 border-b border-border">
                  <span className="text-text-muted font-medium">Price per night</span>
                  <span className="font-bold text-text-primary">₦{selectedRoom.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-border">
                  <span className="text-text-muted font-medium">Duration</span>
                  <span className="font-bold text-text-primary">{nights} Night(s)</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-border">
                  <span className="text-text-muted font-medium">Subtotal</span>
                  <span className="font-bold text-text-primary">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-border">
                  <span className="text-text-muted font-medium">VAT (7.5%)</span>
                  <span className="font-bold text-text-primary">₦{vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-lg font-bold text-text-primary uppercase tracking-wider">Total</span>
                  <span className="text-2xl font-black text-gold">₦{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Confirmation Overlay */}
      {isConfirmed && (
        <div className="fixed inset-0 z-[200] bg-hero-bg/95 backdrop-blur-md flex items-center justify-center p-6">
          <div className="confirm-overlay-content bg-bg-primary border border-border rounded-sm max-w-lg w-full p-10 flex flex-col items-center text-center shadow-2xl">
            <div className="w-24 h-24 bg-blue-glow/10 text-blue-glow rounded-full flex items-center justify-center mb-6 border border-blue-glow/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-3xl font-extrabold mb-8 text-text-primary">Booking Confirmed.</h2>
            
            <div className="bg-bg-secondary w-full p-6 rounded-sm text-left font-mono text-sm border border-border mb-8 shadow-inner overflow-hidden">
              <p className="text-gold mb-2"><span className="text-text-muted">$</span> booking_ref: <span className="font-bold">#MGH-{Math.floor(100000 + Math.random() * 900000)}</span></p>
              <p className="text-text-primary mb-2"><span className="text-text-muted">$</span> guest: {formData.name}</p>
              <p className="text-text-primary mb-2"><span className="text-text-muted">$</span> room: {selectedRoom.name}</p>
              <p className="text-text-primary mb-2"><span className="text-text-muted">$</span> check_in: {formData.checkIn}</p>
              <p className="text-text-primary mb-2"><span className="text-text-muted">$</span> check_out: {formData.checkOut}</p>
              <p className="text-blue-glow mt-4 font-bold text-lg"><span className="text-text-muted font-normal text-sm">$ total:</span> ₦{total.toLocaleString()}</p>
            </div>

            <Link href="/" className="bg-text-primary hover:bg-black text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center gap-2">
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
