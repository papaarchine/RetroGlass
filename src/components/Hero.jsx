import { useNavigate } from "react-router-dom";
import img1 from "/images/1O3A0397 copy.jpg"
import img2 from "/images/1O3A5703.JPG"

export default function Hero() {
    const navigate = useNavigate();

    return (
        
                <div className="w-full h-1/3 rounded-lg flex ">
                    <div className="w-full md:w-2/3 p-2 overflow-hidden object-cover h-full">
                        <img src={img1} className="h-full w-full object-cover object-[5%_20%]"/>
                    </div>
                    <div className="hidden md:block w-1/3 h-full overflow-hidden p-2">
                        <img src={img2} alt="" className="h-full w-full object-cover"/>
                    </div>
                </div>
    )
}