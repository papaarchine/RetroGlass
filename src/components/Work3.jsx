import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from 'react';
import img1 from "/images/1O3A0397 copy.jpg";
import img2 from "/images/1O3A5703.JPG";

gsap.registerPlugin(ScrollTrigger);
export default function Work3() {
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

            tl.to(imag1.current, { y: -250 }, 0);
            tl.to(imag2.current, { y: 250 }, 0);
        }, container);
        return () => context.revert();
    }, []);

    return (
        <div ref ={container} className="w-full h-full bg-blue-500 flex justify-center items-center ov erflow-hidden">
            <div className="w-2/3 h-1/3 relative md:h-2/3 md:w-1/3 bg-red-400">
                <div ref={imag1} className="absolute -bottom-1/3 -right-20 md:-right-1/2 h-1/2 w-3/4 bg-white bg-opacity-30">

                </div>
                <div ref={imag2} className="absolute -top-1/4 -left-32 h-1/2 w-3/4 bg-white bg-opacity-30">

                </div>
            </div>
            
        </div>
    )
}