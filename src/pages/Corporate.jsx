import React from "react";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Intro3 from "../components/Intro3";

export default function Corporate() {
  return (
    <div className="h-screen">
        <Hero/>
        <Intro/>
        <Intro2/>
        <Intro3/>
    </div>
    
  )
}