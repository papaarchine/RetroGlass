import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/Home";
import Contact from "./pages/Contact"; // if you have this page
import Layout from "./Layout";
import NoPage from "./pages/NoPage";   // or use a fallback component
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

