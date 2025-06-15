import React from "react";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Intro3 from "../components/Intro3";
import { useEffect } from "react";

export default function Booking() {
  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-start pt-10 px-4">
      <iframe
        src="https://square.site/book/LV7DSEA55ZKAF/njn7agmh9zdnqd"
        style={{
          width: "100%",
          maxWidth: "1000px",
          minHeight: "800px",
          border: "none",
        }}
        title="Book an Appointment"
      />
    </div>
  );
}
