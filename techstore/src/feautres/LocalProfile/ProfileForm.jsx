import { useState } from "react";

function ProFileForm({ initialData, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    address: initialData.address || "",
  });

  //Ham gom chung xu ly khi go phim cho mo o input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputStyle = "w-100 p-2 mb-3 rounded-1 boder ";
  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn hành vi load lại trang của Form
    onSave(formData); // Gửi cục dữ liệu mới lên cho Cha
  };
  return (
    <>
      <div className="w-100 border p-4 rounded-1 bg-danger-subtle">
        <h3 className="mt-0">Cập nhật thông tin</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Họ và Tên:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={inputStyle}
          ></input>
          <label htmlFor="">Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={inputStyle}
          ></input>
          <label htmlFor="">Số điện thoại:</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={inputStyle}
          ></input>
          <label htmlFor="">Địa chỉ:</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={inputStyle}
          ></input>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="submit" className="btn btn-danger" onClick={onCancel}>
            Hủy bỏ
          </button>
        </form>
      </div>
    </>
  );
}

export default ProFileForm;
