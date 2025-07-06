import React from "react";
import { useNavigate } from 'react-router-dom';

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-blue p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sorry, Page Not Found
        </h1>
        <div className="mt-6">
          <button 
            className="bg-blue-600 text-white px-6 py-2 
            rounded-xl shadow hover:bg-blue-700 transition duration-300"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
