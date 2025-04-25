import React from "react";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Intro3 from "../components/Intro3";
import Work1 from "../components/Work1";
import Work2 from "../components/Work2";
import Portfolio_L from "../components/Portfolio_Landing";
import Work3 from "../components/Work3";
import Work4 from "../components/Work4";
import Work5 from "../components/Work5";
import Work6 from "../components/Work6";

export default function Portfolio() {
  return (
    <div className="h-screen">
        <Portfolio_L/>
        <Work1/>
        <Work2/>
        <Work3/>
        <Work4/>
        <Work5/>
        <Work6/>
    </div>
    
  )
}
