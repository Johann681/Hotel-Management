"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { PieChart, Bed, ClipboardList, Users, LogOut, Plus, Edit, Trash2, Eye, CheckCircle, XCircle } from "lucide-react";
import { adminBookings, customers, rooms } from "@/lib/data";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookingsFilter, setBookingsFilter] = useState("All");
  const [toastMsg, setToastMsg] = useState("");
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      gsap.fromTo(".admin-toast", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 });
    }, 10);
    setTimeout(() => {
      setToastMsg("");
    }, 3000);
  };

  useGSAP(() => {
    if (activeTab === "overview") {
      gsap.fromTo(".stat-card", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 });
      gsap.fromTo(".table-row-anim", { y: 10, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, delay: 0.3 });
    } else {
      gsap.fromTo(".tab-content-anim", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
    }
  }, [activeTab, bookingsFilter]);

  const renderBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Confirmed</span>;
      case "pending":
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Pending</span>;
      case "cancelled":
        return <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Cancelled</span>;
      default:
        return <span>{status}</span>;
    }
  };

  const filteredBookings = adminBookings.filter(b => bookingsFilter === "All" || b.status === bookingsFilter.toLowerCase());

  return (
    <div className="flex min-h-screen bg-bg-secondary pt-20">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A0A0F] text-white hidden md:flex flex-col flex-shrink-0 min-h-[calc(100vh-80px)] border-r border-gold/20">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-gold tracking-wider">ADMIN PORTAL</h2>
          <p className="text-sm text-white/50 mt-1">Welcome, Manager</p>
        </div>
        
        <nav className="flex-1 py-4">
          {[
            { id: "overview", label: "Overview", icon: PieChart },
            { id: "rooms", label: "Rooms", icon: Bed },
            { id: "bookings", label: "Bookings", icon: ClipboardList },
            { id: "customers", label: "Customers", icon: Users },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors border-l-4 ${activeTab === item.id ? "bg-white/10 border-blue-glow text-white" : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"}`}
            >
              <item.icon size={20} className={activeTab === item.id ? "text-blue-glow" : ""} />
              <span className="font-medium tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-2 py-3 text-white/60 hover:text-white transition-colors">
            <LogOut size={20} />
            <span className="font-medium tracking-wide">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
        
        {/* Mobile Nav */}
        <div className="md:hidden flex overflow-x-auto gap-2 mb-6 pb-2 border-b border-border scrollbar-hide">
          {["overview", "rooms", "bookings", "customers"].map(id => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold capitalize transition-colors ${activeTab === id ? "bg-text-primary text-white" : "bg-white border border-border text-text-muted"}`}
            >
              {id}
            </button>
          ))}
        </div>

        {/* --- OVERVIEW TAB --- */}
        {activeTab === "overview" && (
          <div className="tab-content-anim">
            <h1 className="text-3xl font-bold text-text-primary mb-8">Dashboard Overview</h1>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="stat-card bg-bg-primary border border-border p-6 rounded-sm shadow-sm flex items-center gap-4">
                <div className="bg-blue-glow/10 text-blue-glow p-3 rounded-full"><ClipboardList size={28} /></div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Total Bookings</p>
                  <p className="text-2xl font-black text-blue-glow">1,284</p>
                </div>
              </div>
              <div className="stat-card bg-bg-primary border border-border p-6 rounded-sm shadow-sm flex items-center gap-4">
                <div className="bg-gold/10 text-gold p-3 rounded-full"><PieChart size={28} /></div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Revenue (Month)</p>
                  <p className="text-2xl font-black text-gold">₦48.3M</p>
                </div>
              </div>
              <div className="stat-card bg-bg-primary border border-border p-6 rounded-sm shadow-sm flex items-center gap-4">
                <div className="bg-blue-glow/10 text-blue-glow p-3 rounded-full"><Bed size={28} /></div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Occupancy Rate</p>
                  <p className="text-2xl font-black text-blue-glow">87%</p>
                </div>
              </div>
              <div className="stat-card bg-bg-primary border border-border p-6 rounded-sm shadow-sm flex items-center gap-4">
                <div className="bg-gold/10 text-gold p-3 rounded-full"><Users size={28} /></div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Active Guests</p>
                  <p className="text-2xl font-black text-gold">142</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-text-primary mb-4">Recent Bookings</h2>
            <div className="bg-bg-primary border border-border rounded-sm shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bg-secondary border-b border-border text-sm font-bold text-text-muted uppercase tracking-wider">
                    <th className="p-4">Ref #</th>
                    <th className="p-4">Guest Name</th>
                    <th className="p-4">Room</th>
                    <th className="p-4">Check-in</th>
                    <th className="p-4">Check-out</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adminBookings.slice(0, 5).map((b, i) => (
                    <tr key={i} className="table-row-anim border-b border-border/50 hover:bg-bg-secondary/50 transition-colors">
                      <td className="p-4 font-bold text-text-primary">{b.ref}</td>
                      <td className="p-4 font-medium">{b.guest}</td>
                      <td className="p-4 text-text-muted">{b.room}</td>
                      <td className="p-4 text-text-muted">{b.checkIn}</td>
                      <td className="p-4 text-text-muted">{b.checkOut}</td>
                      <td className="p-4">{renderBadge(b.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- ROOMS TAB --- */}
        {activeTab === "rooms" && (
          <div className="tab-content-anim">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-text-primary">Manage Rooms</h1>
              <button onClick={() => showToast("Add Room modal opened")} className="bg-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-sm transition-colors flex items-center gap-2">
                <Plus size={18} /> Add Room
              </button>
            </div>
            
            <div className="bg-bg-primary border border-border rounded-sm shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bg-secondary border-b border-border text-sm font-bold text-text-muted uppercase tracking-wider">
                    <th className="p-4">Room Name</th>
                    <th className="p-4">Price/Night</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((r, i) => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-bg-secondary/50 transition-colors">
                      <td className="p-4 font-bold text-text-primary">{r.name}</td>
                      <td className="p-4 font-medium text-text-muted">₦{r.price.toLocaleString()}</td>
                      <td className="p-4">{i % 2 === 0 ? <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Available</span> : <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Occupied</span>}</td>
                      <td className="p-4 flex justify-end gap-3">
                        <button onClick={() => showToast(`Editing ${r.name}`)} className="text-blue-500 hover:text-blue-700 transition-colors"><Edit size={18} /></button>
                        <button onClick={() => showToast(`${r.name} deleted`)} className="text-red-500 hover:text-red-700 transition-colors"><Trash2 size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- BOOKINGS TAB --- */}
        {activeTab === "bookings" && (
          <div className="tab-content-anim">
            <h1 className="text-3xl font-bold text-text-primary mb-6">All Bookings</h1>
            
            <div className="flex gap-2 mb-6">
              {["All", "Confirmed", "Pending", "Cancelled"].map(f => (
                <button
                  key={f}
                  onClick={() => setBookingsFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${bookingsFilter === f ? "bg-text-primary text-white border border-text-primary" : "bg-white border border-border text-text-muted hover:border-text-muted"}`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="bg-bg-primary border border-border rounded-sm shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bg-secondary border-b border-border text-sm font-bold text-text-muted uppercase tracking-wider">
                    <th className="p-4">Ref #</th>
                    <th className="p-4">Guest</th>
                    <th className="p-4">Room</th>
                    <th className="p-4">Dates</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((b, i) => (
                    <tr key={i} className="table-row-anim border-b border-border/50 hover:bg-bg-secondary/50 transition-colors">
                      <td className="p-4 font-bold text-text-primary">{b.ref}</td>
                      <td className="p-4 font-medium">{b.guest}</td>
                      <td className="p-4 text-text-muted">{b.room}</td>
                      <td className="p-4 text-text-muted text-sm">{b.checkIn} to {b.checkOut}</td>
                      <td className="p-4 font-bold text-text-primary">{b.amount}</td>
                      <td className="p-4">{renderBadge(b.status)}</td>
                      <td className="p-4 flex justify-end gap-3">
                        <button onClick={() => showToast(`Booking ${b.ref} approved`)} className="text-green-500 hover:text-green-700 transition-colors" title="Approve"><CheckCircle size={20} /></button>
                        <button onClick={() => showToast(`Booking ${b.ref} cancelled`)} className="text-red-500 hover:text-red-700 transition-colors" title="Cancel"><XCircle size={20} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- CUSTOMERS TAB --- */}
        {activeTab === "customers" && (
          <div className="tab-content-anim">
            <h1 className="text-3xl font-bold text-text-primary mb-8">Customer Database</h1>
            
            <div className="bg-bg-primary border border-border rounded-sm shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bg-secondary border-b border-border text-sm font-bold text-text-muted uppercase tracking-wider">
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Bookings</th>
                    <th className="p-4">Total Spent</th>
                    <th className="p-4">Joined</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-bg-secondary/50 transition-colors">
                      <td className="p-4 font-bold text-text-primary">{c.name}</td>
                      <td className="p-4 text-text-muted">{c.email}</td>
                      <td className="p-4 text-text-muted">{c.bookings}</td>
                      <td className="p-4 font-bold text-text-primary">{c.spent}</td>
                      <td className="p-4 text-text-muted">{c.joined}</td>
                      <td className="p-4 flex justify-end gap-3">
                        <button onClick={() => showToast(`Viewing ${c.name}`)} className="text-blue-500 hover:text-blue-700 transition-colors"><Eye size={18} /></button>
                        <button onClick={() => showToast(`${c.name} removed`)} className="text-red-500 hover:text-red-700 transition-colors"><Trash2 size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="admin-toast fixed bottom-6 right-6 bg-text-primary text-white px-6 py-4 rounded-sm shadow-2xl flex items-center gap-3 border-l-4 border-blue-glow z-50">
          <CheckCircle size={20} className="text-blue-glow" />
          <span className="font-medium tracking-wide">{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
