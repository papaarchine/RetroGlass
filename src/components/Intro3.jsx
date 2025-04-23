import { useNavigate } from "react-router-dom";
import img1 from "/images/_O3A2269 copy.jpg"

export default function Intro3() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen p-2 rounded-lg flex-column overflow-hidden shadow-md">
            <div className="h-1/2 flex w-full p-2 overflow-hidden">
                <img src={img1} className="md:w-4/5 object-cover"/>
                <img src={img1} className="w-1/5 object-cover hidden md:block"/>
            </div>
            <div className="h-1/2 w-full p-2 overflow-hiden flex">
                <img src={img1} className="object-cover md:w-2/3"/>
                <img src={img1} className="object-cover hidden md:block"/>
            </div>
            
        </div>
    )
}