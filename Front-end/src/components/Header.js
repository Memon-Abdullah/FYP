// components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 absolute top-0 w-full z-10 bg-white">
      {/* Logo */}
      <div className="text-[32px] font-semibold text-[#2f1365] font-serif tracking-tight">MoodMeet.</div>

      {/* Buttons */}
      <div className="space-x-5 flex justify-evenly">
        <button className="bg-[#b6b6f7] text-white px-10  rounded text-sm hover:opacity-90">login</button>
        <button className="bg-[#9e56b8] text-white px-10  rounded text-sm hover:opacity-90">sign up</button>
      </div>
    </header>
  );
}
