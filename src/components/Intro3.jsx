import { useNavigate } from "react-router-dom";
import img1 from "/images/Cover3.JPG"
import img2 from "/images/Cover2.jpg"
import img3 from "/images/Cover1.JPG"
import img4 from "/images/Cover4.jpg"

export default function Intro3() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen pl-2 pr-2 flex-column overflow-hidden shadow-md">
            <div className="h-1/2 flex w-full overflow-hidden">
                <img src={img1} className="w-full md:w-1/3 object-cover"/>
                <img src={img2} className="w-2/3 object-cover hidden md:block"/>
            </div>
            <div className="h-1/2 w-full pt-2 overflow-hiden flex">
                <img src={img3} className="object-cover md:w-1/2"/>
                <img src={img4} className="object-cover hidden md:block md:w-1/2"/>
            </div>
            
        </div>
    )
}