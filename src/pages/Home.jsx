import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen bg-white items-center justify-center">
      <div className="bg-blue-500 h-1/3 p-10 shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
        <p className="text-gray-600 text-lg">This is a simple React homepage with Tailwind styling.</p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
       
      </div> 
      <div className="p-10 bg-pink-600 h-1/3">
        <p className="text-gray-600 text-lg">This is a simple React homepage with Tailwind styling.</p> 
      </div>
      <div className="p-10 bg-purple-600 h-1/3">
        <p className="text-gray-600 text-lg">This is a simple React homepage with Tailwind styling.</p> 
      </div>
    </div>
  );
}
