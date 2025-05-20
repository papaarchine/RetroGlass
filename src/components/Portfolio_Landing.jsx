import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import img1 from "/images/1O3A0397 copy.jpg"
import img2 from "/images/1O3A5703.JPG"

export default function Portfolio_L() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex justify-center items-center terxt-3xl">
            <p className="text-7xl">
                Welcome To Our Portfolio
            </p>
            
        </div>
    )
}