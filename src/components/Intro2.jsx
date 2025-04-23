import { useNavigate } from "react-router-dom";
import img1 from "/images/_O3A2269 copy.jpg"

export default function Intro2() {
    const navigate = useNavigate();

    return (
        
                <div className="w-full h-2/15 p-2 rounded-lg flex overflow-hidden shadow-md">
                    <img src={img1} className=""/>
                </div>
    )
}