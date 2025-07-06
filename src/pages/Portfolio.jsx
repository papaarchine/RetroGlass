import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import Work1 from "../components/Work1";
import Work2 from "../components/Work2";
import Portfolio_L from "../components/Portfolio_Landing";
import Work3 from "../components/Work3";
import Work4 from "../components/Work4";
import Work5 from "../components/Work5";

export default function Portfolio() {
   
  return (
    <div className="">
        <Portfolio_L/>
        <Work1/>
        <Work2/>
        <Work3/>
        <Work4/>
        <Work5/>
    </div>
    
  )
}
