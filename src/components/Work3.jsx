import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from 'react';
import img1 from "/images/1O3A5703.JPG";
import img2 from "/images/1O3A5702.JPG";
import img3 from "/images/1O3A5773.JPG"
import Sports from "../pages/Sports";
import { animation1 } from "./animaton1";
import { ImageLoader } from "./ImageLoader";

gsap.registerPlugin(ScrollTrigger);

export default function Work3() {
  const container = useRef(null);
  const imag1 = useRef(null);
  const imag2 = useRef(null);
  const navigate = useNavigate();

 const { handleImageLoad, isReady } = ImageLoader(3); //image loader


  useLayoutEffect(() => {
    if (!isReady) return;
    const context = animation1(container, imag1, imag2);
    return () => context.revert();
  }, [isReady]);


  return (
      <div
        ref={container}
        className="w-full h-full flex justify-center bg-black items-center"
      >
        {/* Optional Preloader UI */}
        {!isReady && (
          <div className="absolute z-50 text-white">Loading...</div>
        )}
  
        <div
          onClick={() => navigate("/Sports")}
          className={`w-2/3 h-1/3 relative md:h-2/3 md:w-1/3 group ${!isReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        >
          <div className="opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto justify-center items-center absolute inset-0 text-white bg-black flex" />
  
          <p className="z-10 transition-opacity duration-300 top-0 flex justify-center items-center absolute inset-0 opacity-0 group-hover:opacity-100 md:text-3xl text-white">
            Sports
          </p>
  
          <img
            src={img3}
            alt="Main Visual"
            className="z-0 h-full w-full object-cover object-[5%_20%]"
            onLoad={handleImageLoad}
          />
  
          <div
            ref={imag1}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            className="z-0 absolute -bottom-1/3 -right-20 md:-right-1/2 h-1/2 w-3/4"
          >
            <img
              src={img1}
              alt="Decorative Layer 1"
              className="h-full w-full object-cover object-[60%_80%]"
              onLoad={handleImageLoad}
            />
          </div>
  
          <div
            ref={imag2}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            className="z-0 absolute -top-1/4 -left-32 h-1/2 w-3/4 bg-opacity-30"
          >
            <img
              src={img3}
              alt="Decorative Layer 2"
              className="h-full w-full object-cover object-[50%_80%]"
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    );
  }
  