"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"login" | "register">("login");
  const router = useRouter();

  useGSAP(() => {
    gsap.fromTo(
      ".auth-card",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
    );
  }, { scope: containerRef });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    
    if (email.toLowerCase().includes("admin")) {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-28 pb-20 bg-bg-secondary flex flex-col items-center justify-center px-6">
      
      <div className="font-mono text-gold bg-gold/10 px-4 py-1.5 rounded-sm border border-gold/30 text-sm font-bold tracking-widest mb-8">
        MGH://auth
      </div>

      <div className="auth-card bg-bg-primary border border-border w-full max-w-md p-8 sm:p-10 rounded-sm shadow-xl">
        
        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          <button 
            className={`flex-1 pb-4 text-center font-bold text-lg uppercase tracking-wider transition-all ${tab === "login" ? "text-gold border-b-2 border-blue-glow drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "text-text-muted hover:text-text-primary"}`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button 
            className={`flex-1 pb-4 text-center font-bold text-lg uppercase tracking-wider transition-all ${tab === "register" ? "text-gold border-b-2 border-blue-glow drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "text-text-muted hover:text-text-primary"}`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {tab === "login" && (
          <form onSubmit={handleLogin} className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Email Address</label>
              <input id="email" required type="email" placeholder="admin@meridian.com" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
              <p className="text-[10px] text-text-muted mt-1 italic">Tip: use &apos;admin&apos; in email for dashboard</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
            </div>
            <button type="submit" className="w-full bg-gold hover:bg-yellow-600 text-white font-bold py-3.5 rounded-sm transition-all mt-4 focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 flex justify-center items-center gap-2">
              Login <span className="text-xl leading-none">▸</span>
            </button>
          </form>
        )}

        {/* Register Form */}
        {tab === "register" && (
          <form onSubmit={handleRegister} className="flex flex-col gap-5 animate-in fade-in duration-300">
            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Confirm Password</label>
              <input required type="password" placeholder="••••••••" className="w-full border border-border bg-bg-secondary p-3 rounded-sm focus:outline-none focus:border-blue-glow focus:ring-1 focus:ring-blue-glow transition-all" />
            </div>
            <button type="submit" className="w-full bg-gold hover:bg-yellow-600 text-white font-bold py-3.5 rounded-sm transition-all mt-4 focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 flex justify-center items-center gap-2">
              Create Account <span className="text-xl leading-none">▸</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
