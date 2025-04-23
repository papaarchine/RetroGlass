import { useNavigate } from "react-router-dom";
import img1 from "/images/_O3A2269 copy.jpg"

export default function Intro() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center p-2">
            <div className="w-full h-1/5 p-2 overflow-hidden flex-column">
                <div className="w-full flex justify-center p-2 pt-10">
                    <p className="text-2xl md:text-3xl text-bold"> Capture Your Momets With Us</p>
                </div>
                <p className="w-full flex justify-center p-2">Your story through our lens</p>
                    {/* <img src={img1} className=""/> */}
            </div>
        </div>
            
    )
}