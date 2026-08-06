import { useEffect, useState } from "react";

export default function LiveClock(){
    const [time,setTime] = useState(new Date());

    //Effect 1 : Quản lý Timer (Tương đương componentDidMount + componentWillUnMount)
    useEffect(()=>{
    console.log("[Mount]: Component đã xuất hiện trên Dom. Bắt đầu đêm giờ")
        //Setup code: chạy timer mỗi giây
        const timerId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            console.log("[Unmount]: Component sắp bị hủy . Đã xóa timer")
            clearInterval(timerId);
        }
    },[]);

    useEffect(()=>{
        console.log("[Update]: thời gian đã thay đổi, cập nhật tiêu đề tab.")

        document.title = time.toLocaleTimeString();

        // Khôi phục lại tiêu đề gốc khi đồng hồ bị ẩn đi
        return ()=>{
       
            document.title = "Thực hành React";
        }
    },[time]);

    return (
        <div className="p-4 border border-1 rouned">
            <h2>Thời gian hiện tại:</h2>
            <h3>{time.toLocaleTimeString()}</h3>
        </div>
    )


}