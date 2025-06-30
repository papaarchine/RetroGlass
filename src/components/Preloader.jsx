// src/components/Preloader.jsx
import React from "react";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="text-2xl animate-pulse">Loading...</div>
    </div>
  );
}