import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/Home";
import Layout from "./Layout";
import NoPage from "./pages/NoPage";   // or use a fallback component
import reactLogo from './assets/react.svg'
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Portraits from "./pages/Portraits";
import Lifestyle from "./pages/Lifestyle";
import Sports from "./pages/Sports";
import Corporate from "./pages/Corporate";
import Graduation from "./pages/Graduation";
import Booking from "./pages/Booking";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path ="/About" element={<About />} />
          <Route path ="/Portfolio" element={<Portfolio />} />
          <Route path ="/Portraits" element={<Portraits />} />
          <Route path ="/Lifestyle" element={<Lifestyle />} />
          <Route path ="/Sports" element={<Sports />} />
          <Route path ="/Corporate" element={<Corporate />} />
          <Route path ="/Graduation" element={<Graduation />} />
          <Route path ="/Booking" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

