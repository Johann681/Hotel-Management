import Link from "next/link";
// Removed lucide-react brand imports because they do not exist

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white pt-20 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="flex flex-col mb-4 inline-block">
              <span className="text-2xl font-bold tracking-wider text-gold">
                MERIDIAN GRAND
              </span>
              <span className="text-xs text-white/50 tracking-widest uppercase mt-1">
                Hotel & Suites
              </span>
            </Link>
            <p className="text-white/70 max-w-sm mb-6 leading-relaxed">
              Where Business Meets Comfort. Experience the ultimate luxury and convenience in the heart of Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="/#rooms" className="text-white/70 hover:text-gold transition-colors">Rooms & Suites</Link>
              <Link href="/#restaurant" className="text-white/70 hover:text-gold transition-colors">The Bistro</Link>
              <Link href="/#amenities" className="text-white/70 hover:text-gold transition-colors">Amenities</Link>
              <Link href="/booking" className="text-white/70 hover:text-gold transition-colors">Book Now</Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wider">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 hover:bg-gold hover:text-white text-white/70 p-3 rounded-sm transition-all border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="bg-white/5 hover:bg-gold hover:text-white text-white/70 p-3 rounded-sm transition-all border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="bg-white/5 hover:bg-gold hover:text-white text-white/70 p-3 rounded-sm transition-all border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="bg-white/5 hover:bg-gold hover:text-white text-white/70 p-3 rounded-sm transition-all border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 Meridian Grand Hotel. All rights reserved.
          </p>
          <Link href="/admin" className="text-white/30 hover:text-white/70 text-sm transition-colors flex items-center gap-1">
            Admin Portal <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
