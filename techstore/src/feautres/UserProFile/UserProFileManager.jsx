import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileView from "./ProfileView";

export default function UserProfileManager() {
    //1. Quản lý Mock Data thay cho (fetch API)
    const [userData, setUserData] = useState({
        id: "US01",
        name: "Nguyễn Văn A",
        email: "nva@exmaple.com",
        phone: "0901234567",
        avatar: "/src/assets/img/ipad_m4.jpg"
    });

    //2. Quản lý UI State: Quyết định đang ở chế độ xem hay sửa

    const [isEditing, setIsEditing] = useState(false);

    //3. Logic xử lý dữ liệu
    const handelSaveProFile = (updateData) => {
        console.log("Đang gọi API cập nhật dữ liệu", updateData);

        //Cập nhật state gốc với dữ liệu mới
        setUserData(prevDate => ({
            ...prevDate,
            name: updateData.name,
            phone: updateData.phone
        }));

        setIsEditing(false);
        alert("Cập nhật thông tin thành công!");
    };

    return (
        <>
            <div style={{
                maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif'
            }}>
                {/*Điều phối hiển thị (Conditional Renderning)*/}
                {
                    isEditing ? (<ProfileForm
                            user={userData}
                            onSave={handelSaveProFile}
                            onCancel={() => setIsEditing(false)} 
                        />)
                        : (<ProfileView user={userData} onEdit={() => setIsEditing(true)}/>)
                }
            </div>
        </>
    )
}