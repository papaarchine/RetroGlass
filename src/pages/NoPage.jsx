import React from "react";
import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-blue p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
        <p className="text-gray-600 text-lg">This is a simple React homepage with Tailwind styling.</p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
