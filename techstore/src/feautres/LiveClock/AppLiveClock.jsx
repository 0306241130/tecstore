import { useState } from "react";
import LiveClock from "./LiveClock";

export default function AppLiveClock(){
    const [showClock , setShowClock] = useState(true);

    {/* Nút bật/tắt để kích hoạt Mount và Unmount */}
    return(<>    <button className="btn btn-success mb-4" onClick={()=> setShowClock(!showClock)}>
        {showClock ? "Ẩn đồng hồ (Unmount)" : "Hiện đồng hồ (Mount)"}
    </button>
        {showClock && <LiveClock/>}
        </>
    )
    
    /*Render có điều kiện*/
    
    
    
}