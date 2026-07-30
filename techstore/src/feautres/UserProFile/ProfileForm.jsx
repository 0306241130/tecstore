import React , {useState} from "react";

export default function ProfileForm({user , onSave , onCancel}){
    const [formData,setFormData] = useState({
        name: user.name,
        phone: user.phone
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        onSave(formData); // Đẩy dữ liệu mới lên SmartComponet xử lý
    }
    return (
        <>
            <div className="border border-secondary rounded p-4">
                <h3>Chỉnh sửa thông tin</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="d-block mb-1">Họ và Tên</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="d-block mb-1">Số điện thoại</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary me-2  text-white ">
                        Lưu thay đổi
                    </button>
                    <button type="button" className="btn btn-danger" onClick={onCancel}>
                        Hủy bỏ
                    </button>
                </form>
            </div>
        </>
    )
}