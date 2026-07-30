export default function ProfileView({ user, onEdit }) {

    return (
        <>
            <div className="border border-3 border-danger p-3 rounded d-flex flex-column">
                <h3 className="text-center">Thông tin cá nhân</h3>
                <div className="d-flex align-items-center mb-3">
                    <img src={user.avatar} alt="Avartar" style={{
                        width: '80px', height: '80px', borderRadius: '50%', marginRight:
                            '15px'
                    }} />
                    <div>
                        <p><strong>Họ và Tên:</strong>{user.name}</p>
                        <p><strong>Email:</strong>{user.email}</p>
                        <p><strong>Số điện thoại:</strong>{user.phone}</p>
                    </div>
                </div>
                <button onClick={onEdit} className=" btn btn-primary align-self-center"
                >Chỉnh sửa thông tin</button>
            </div>

        </>
    );
};