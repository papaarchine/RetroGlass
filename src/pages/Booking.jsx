import React from "react";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Intro3 from "../components/Intro3";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://square.site/appointments/buyer/widget/njn7agmh9zdnqd/LV7DSEA55ZKAF.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if the script should be removed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Square will replace this automatically */}
      <div id="square-appointments"></div>
    </div>
  );
}
