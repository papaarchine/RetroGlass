import React from "react";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Intro3 from "../components/Intro3";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-base leading-relaxed">
          At Retro Glass Photography, we specialize in capturing moments that tell 
          your unique story. Whether it's your graduation, a family gathering, a special 
          celebration, or a creative project, we are here to preserve your memories with passion, 
          creativity, and attention to detail. We believe every moment is worth capturing, and our 
          mission is to bring out the true essence of those special times, so you can look back on 
          them for years to come. From candid smiles to elegant portraits, we make sure your memories are 
          always beautifully immortalized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="text-base leading-relaxed">
            Founded in 2020, we started as a small team of passionate individuals who believed that meaningful change
            comes from collective effort. Today, we’ve grown into a diverse team with global impact.
          </p>
        </section>

        
      </div>
    </div>
  );
    
}
