import { useEffect, useState } from "react";
import ProfileDisplay from "./ProfileDisplay";
import ProFileForm from "./ProfileForm";
export default function ProfileManager() {
  //1 khoi tao State bang cach doc tu LocalStorage
  const [userProfile, setUserProfile] = useState(() => {
    const savedData = localStorage.getItem("my_profile");

    if (savedData) {
      return JSON.parse(savedData);
    }

    //Neu chua co tra ve object rong
    return { name: "", email: "", phone: "", address: "" };
  });

  //Stae quan ly viec an hien Form
  const [isEditting, setIsEditting] = useState(false);

  //2 Lang nghe thay doi: Moi khi userProfile thay doi, tu dong luu vao LoaclStorage
  useEffect(() => {
    localStorage.setItem("my_profile", JSON.stringify(userProfile));
  }, [userProfile]);

  const handleSaveData = (newData) => {
    setUserProfile(newData); //cap nhat sate goc
    setIsEditting(false);
    alert("Lưu thông tin thành công!");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Thiết lập Tài khoản</h2>
      {/* 4. Điều hướng hiển thị */}
      {isEditting ? (
        <ProFileForm
          initialData={userProfile}
          onSave={handleSaveData}
          onCancel={() => setIsEditting(false)}
        />
      ) : (
        <ProfileDisplay
          data={userProfile}
          onOpenEdit={() => setIsEditting(true)}
        />
      )}
    </div>
  );
}
