import React from "react";

export default function WhatYouCanDo() {
  return (
    <section className="w-full bg-[#FFFDF8] py-10 px-4 flex justify-center">
      <div className="relative w-full max-w-[1030px] bg-[#FFFDF8] bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] border border-[#E6D5B0] rounded-[4px] shadow-sm p-6 md:p-10 overflow-hidden">
        
        {/* Corner Leaves - Top */}
        <div className="absolute top-3 left-3 text-[#8B6A3E] opacity-70">
          <Leaf position="top-left" />
        </div>
        <div className="absolute top-3 right-3 text-[#8B6A3E] opacity-70 scale-x-[-1]">
          <Leaf position="top-right" />
        </div>
        {/* Corner Leaves - Bottom */}
        <div className="absolute bottom-3 left-3 text-[#8B6A3E] opacity-70 scale-y-[-1]">
          <Leaf position="bottom-left" />
        </div>
        <div className="absolute bottom-3 right-3 text-[#8B6A3E] opacity-70 scale-[-1]">
          <Leaf position="bottom-right" />
        </div>

        {/* Title */}
        <h2 className="text-center font-serif font-extrabold text-[#3D2314] text-[26px] md:text-[42px] leading-tight tracking-tight">
          What You Can Do With Our Library System?
        </h2>

        {/* Ornamental Divider */}
        <div className="flex items-center justify-center gap-4 my-5">
          <div className="h-[1px] w-[35%] bg-gradient-to-r from-transparent to-[#8B6A3E]/60"></div>
          <div className="text-[#8B6A3E] text-[14px]">❧ ⚜ ❧</div>
          <div className="h-[1px] w-[35%] bg-gradient-to-l from-transparent to-[#8B6A3E]/60"></div>
        </div>

        {/* Intro Para */}
        <p className="text-center text-[#1a1a1a] font-bold text-[13px] md:text-[15.5px] leading-[1.6] max-w-[900px] mx-auto">
          Our Library Management System is designed to simplify, organise, and enhance every aspect of library operations—
          giving administrators, staff, and members a seamless experience from discovery to delivery. Whether you are overseeing
          collections or tracking member activity, everything is managed in one intuitive platform.
        </p>

        {/* Content Grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-0 relative">
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#8B6A3E]/30 -translate-x-1/2"></div>

          {/* Left Column */}
          <div className="pr-0 md:pr-8 space-y-6">
            <FeatureItem
              icon={<IconDashboard />}
              title="Dashboard"
              desc="gives you a real-time overview of library activity, highlighting recent loans, new additions, and system alerts at a glance."
            />
            <FeatureItem
              icon={<IconBooks />}
              title="Manage Books"
              desc="allows you to add, edit, and organise book records effortlessly, keep details updated, and maintain an accurate catalogue."
            />
            <FeatureItem
              icon={<IconCategory />}
              title="Categories"
              desc="help you group collections by subject, genre, or section so users can browse and locate resources quickly and logically."
            />
            <FeatureItem
              icon={<IconMembers />}
              title="Track Members"
              desc="lets you maintain member profiles, monitor membership status, and keep contact information secure and organised."
            />
            <FeatureItem
              icon={<IconTransaction />}
              title="Transactions"
              desc="record every borrowing, return, and renewal clearly, ensuring a transparent history of activity for both staff and members."
            />
          </div>

          {/* Right Column */}
          <div className="pl-0 md:pl-8 space-y-6 mt-6 md:mt-0">
            <FeatureItem
              icon={<IconMembers />}
              title="Track Members"
              desc="lets you maintain member profiles, monitor membership status, and keep contact information"
            />
            <div className="flex gap-3">
              <div className="mt-1 min-w-[36px]"></div>
              <p className="text-[13.5px] leading-[1.5] text-black">
                <span className="font-bold">Track Members</span> lets you maintain acuities, and keep contact information secure and organised.
              </p>
            </div>

            <FeatureItem
              icon={<IconTransaction />}
              title="Transactions"
              desc="record every borrowing, return, and renewal clearly, ensuring a transparent history of activity for both staff and members."
            />
            <FeatureItem
              icon={<IconReport />}
              title="Reports"
              desc="generate insightful summaries on circulation, popular titles, and overall usage to support informed decision-making."
            />
            <FeatureItem
              icon={<IconProfile />}
              title="Profile"
              desc="provides personalised account details where users can manage their information, preferences, and access history."
            />
            <FeatureItem
              icon={<IconLogout />}
              title="Logout"
              desc="ensures secure session management, protecting data privacy with a simple and reliable sign-out."
            />
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-8 text-center">
          <p className="font-serif italic text-[#3D2314] text-[16px] md:text-[18px]">
            Empowering your library with clarity, efficiency, and control — all in one secure system.
          </p>
          <p className="mt-4 text-[10px] md:text-[12px] font-medium text-black tracking-wide">
            Library Management System • Built for modern institutions • Secure • Reliable • User-focused
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="min-w-[36px] w-[36px] h-[36px] flex items-center justify-center text-[#5A3A22]">{icon}</div>
      <p className="text-[13.5px] leading-[1.5] text-black">
        <span className="font-extrabold">{title}</span> {desc}
      </p>
    </div>
  );
}

// --- ICONS (Same as Banner) ---
const IconDashboard = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="13" r="9"/><path d="M12 13 L 16 9"/><path d="M8 11 L9 11 M6 13 L7 13 M7 9 L8 10"/></svg>
);
const IconBooks = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 6 L12 3 L20 6 L12 9 Z"/><path d="M4 10 L12 7 L20 10 L12 13 Z"/><path d="M4 14 L12 11 L20 14 L12 17 Z"/></svg>
);
const IconCategory = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8 H17 M7 12 H14"/></svg>
);
const IconMembers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="7" r="2.5"/><path d="M3 18 C3 14 6 12 8 12 C10 12 13 14 13 18"/><path d="M13 17 C13 14 15 13 16 13 C17 13 20 14 20 17"/></svg>
);
const IconTransaction = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 7 H17 M7 11 H14"/><path d="M17 16 L20 16 L18 22 L20 16" strokeLinecap="round"/></svg>
);
const IconReport = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M8 6 H16 M8 10 H16 M8 14 H12"/></svg>
);
const IconProfile = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="4"/><path d="M5 20 C5 15 8 13 12 13 C16 13 19 15 19 20"/></svg>
);
const IconLogout = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="14" height="18" rx="1"/><path d="M17 8 L20 12 L17 16"/><path d="M13 12 H20"/></svg>
);

const Leaf = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M5 2 C10 6, 6 14, 2 18 M7 5 C8 7, 10 8, 13 8 M6 10 C9 11, 12 10, 14 13 M4 14 C7 15, 10 14, 12 17" stroke="#8B6A3E" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="3" cy="3" r="1" fill="#8B6A3E"/>
  </svg>
);