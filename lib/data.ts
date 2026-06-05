export const rooms = [
  {
    id: "standard",
    name: "Standard Room",
    price: 45000,
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    desc: "A well-appointed room for the focused traveler.",
    features: ["WiFi", "AC", "TV", "Work Desk", "Housekeeping"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 85000,
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    desc: "Elevated comfort with premium city views.",
    features: ["WiFi", "AC", "TV", "Mini Bar", "Bathtub", "City View"],
  },
  {
    id: "executive",
    name: "Executive Suite",
    price: 150000,
    gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    desc: "Full suite experience with lounge and kitchen.",
    features: ["WiFi", "AC", "Lounge", "Kitchen", "Panoramic View"],
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    price: 320000,
    gradient: "linear-gradient(135deg, #C9A84C, #1a1a2e)",
    desc: "The pinnacle of luxury. Unmatched in detail.",
    features: ["WiFi", "AC", "Private Pool", "Butler", "Penthouse"],
  },
];

export const menuItems = [
  {
    id: "breakfast",
    name: "Breakfast",
    priceRange: "₦5,000–₦12,000",
    desc: "Fresh continental and Nigerian breakfast options",
    icon: "🌅",
    tags: ["Continental", "Nigerian", "Buffet"],
  },
  {
    id: "lunch",
    name: "Business Lunch",
    priceRange: "₦8,000–₦18,000",
    desc: "Power lunches for the corporate mind",
    icon: "💼",
    tags: ["Set Menu", "À la carte", "Private Dining"],
  },
  {
    id: "dinner",
    name: "Fine Dining",
    priceRange: "₦15,000–₦45,000",
    desc: "An evening experience unlike any other",
    icon: "🍷",
    tags: ["Reservations", "Wine Pairing", "Live Music"],
  },
];

export const amenities = [
  {
    name: "High-Speed WiFi",
    desc: "Enterprise-grade connectivity throughout the hotel",
    icon: "🌐",
  },
  {
    name: "Infinity Pool",
    desc: "Rooftop pool with panoramic city views",
    icon: "🏊",
  },
  {
    name: "Fitness Center",
    desc: "24/7 fully equipped modern gymnasium",
    icon: "💪",
  },
  {
    name: "Luxury Spa",
    desc: "Full-service spa and wellness treatments",
    icon: "💆",
  },
  {
    name: "Conference Rooms",
    desc: "State-of-the-art boardrooms for 5 to 200 guests",
    icon: "🏢",
  },
  {
    name: "Airport Shuttle",
    desc: "Complimentary transfers available on request",
    icon: "✈️",
  },
];

export const reviews = [
  {
    author: "Adaeze Okonkwo",
    role: "CEO · Lagos",
    text: "The Executive Suite was perfect for my business trip. Exceptional service and stunning city views.",
    stars: 5,
  },
  {
    author: "Emeka Balogun",
    role: "Senior Partner · Abuja",
    text: "From the Bistro to the boardroom, Meridian Grand delivered on every promise.",
    stars: 5,
  },
  {
    author: "Fatima Kwara",
    role: "Finance Director · Kano",
    text: "Flawless from check-in to checkout. The spa alone is worth the stay.",
    stars: 5,
  },
];

export const adminBookings = [
  {
    ref: "MGH-842910",
    guest: "Michael Johnson",
    room: "Deluxe Room",
    checkIn: "2025-10-12",
    checkOut: "2025-10-15",
    amount: "₦255,000",
    status: "confirmed",
  },
  {
    ref: "MGH-391024",
    guest: "Sarah Williams",
    room: "Executive Suite",
    checkIn: "2025-10-14",
    checkOut: "2025-10-16",
    amount: "₦300,000",
    status: "pending",
  },
  {
    ref: "MGH-558291",
    guest: "David Ojo",
    room: "Standard Room",
    checkIn: "2025-10-10",
    checkOut: "2025-10-11",
    amount: "₦45,000",
    status: "confirmed",
  },
  {
    ref: "MGH-110492",
    guest: "Grace Adeyemi",
    room: "Presidential Suite",
    checkIn: "2025-11-01",
    checkOut: "2025-11-05",
    amount: "₦1,280,000",
    status: "cancelled",
  },
  {
    ref: "MGH-774829",
    guest: "James Smith",
    room: "Deluxe Room",
    checkIn: "2025-10-20",
    checkOut: "2025-10-25",
    amount: "₦425,000",
    status: "confirmed",
  },
];

export const customers = [
  {
    name: "Michael Johnson",
    email: "michael.j@email.com",
    bookings: 4,
    spent: "₦420,000",
    joined: "Jan 12, 2024",
  },
  {
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    bookings: 1,
    spent: "₦150,000",
    joined: "May 03, 2025",
  },
  {
    name: "David Ojo",
    email: "david.o@email.com",
    bookings: 12,
    spent: "₦1,850,000",
    joined: "Nov 22, 2023",
  },
  {
    name: "Grace Adeyemi",
    email: "grace.a@email.com",
    bookings: 2,
    spent: "₦1,280,000",
    joined: "Feb 10, 2024",
  },
  {
    name: "James Smith",
    email: "james.s@email.com",
    bookings: 5,
    spent: "₦850,000",
    joined: "Aug 15, 2023",
  },
  {
    name: "Fatima Kwara",
    email: "fatima.k@email.com",
    bookings: 3,
    spent: "₦540,000",
    joined: "Mar 01, 2025",
  },
];
