import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-2 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-sm">
          © 2025 <span className="font-semibold">Retro Glass Photography</span>. All rights reserved.
        </p>
        <div className="text-sm">
          <p>Email: <a href="mailto:info@retroglass.com" className="hover:underline">info@retroglass.com</a></p>
          <p>Phone: <a href="tel:+12045832658" className="hover:underline">+1 (204) 583-2658</a></p>
        </div>
      </div>
    </footer>
  );
}