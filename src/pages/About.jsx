import React from "react";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Intro3 from "../components/Intro3";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-base leading-relaxed">
            We are dedicated to creating innovative solutions that make a positive impact on our community.
            Our mission is to build with purpose, lead with compassion, and drive change through collaboration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="text-base leading-relaxed">
            Founded in 2020, we started as a small team of passionate individuals who believed that meaningful change
            comes from collective effort. Today, we’ve grown into a diverse team with global impact.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
          <ul className="list-disc ml-6">
            <li>Alex – Founder & CEO</li>
            <li>Jamie – Head of Product</li>
            <li>Taylor – Community Manager</li>
          </ul>
        </section>
      </div>
    </div>
  );
    
}
