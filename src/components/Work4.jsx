import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from 'react';
import img1 from "/images/1O3A0397 copy.jpg";
import img2 from "/images/1O3A5703.JPG";
import Portraits from "../pages/Portraits";

gsap.registerPlugin(ScrollTrigger);

export default function Work4() {
    const container = useRef(null);
    const imag1 = useRef(null);
    const imag2 = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect ( () => {
        const context = gsap.context (() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    markers:true
                }
            });

            tl.to(imag1.current, { x: -250 }, 0);
            tl.to(imag2.current, { x: 250 }, 0);
        }, container);
        return () => context.revert();
    }, []);

    return (
        <div ref={container} className="w-full h-full bg-blue-500 flex justify-center items-center">
                   
                   <div onClick={() => {
                      navigate("/Portraits")}}  
                      className="w-2/3 h-1/3 relative md:h-2/3 md:w-1/3 bg-red-400 group">
                        <div className="opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto justify-center items-center absolute inset-0 text-white bg-black flex"> 
                        </div>
                        <p className="z-10 transition-opacity duration-300 top-0 flex justify-center items-center absolute inset-0 opacity-0 group-hover:opacity-100 md:text-3xl text-white">
                            Portraits
                        </p>
                        <img src={img2} className="z-0 h-full w-full object-cover object-[5%_20%]" />
                        <div ref={imag1} className="z-0 absolute -bottom-1/3 -right-20 md:-right-1/2 h-1/2 w-3/4 bg-white bg-opacity-30">
                            <img src={img1} className="h-full w-full object-cover object-[5%_20%]"/>
                        </div>
                        <div ref ={imag2} className="z-0 absolute -top-1/4 -left-32 h-1/2 w-3/4 bg-white bg-opacity-30">
                            <img src={img1} className="h-full w-full object-cover object-[5%_20%]"/>
                        </div>
                    </div>
                    
                </div>
    )
}