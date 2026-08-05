function ProfileDisplay({ data, onOpenEdit }) {
  return (
    <>
      <div className="border border-1 p-3 rounded-1 bg-body">
        <h3 className="mt-0">My Profile</h3>
        {/*kiem tra xem da co ten chua , neu chua tuc la ho so trong */}
        {!data.name ? (
          <p className="text-danget">You haven't infomation,please update</p>
        ) : (
          <ul className="fs-3">
            <li>
              <strong>UserName:</strong>
              {data.name}
            </li>
            <li>
              <strong>Email:</strong>
              {data.email}
            </li>
            <li>
              <strong>Numberphone</strong>
              {data.phone}
            </li>
            <li>
              <strong>Address</strong>
              {data.address}
            </li>
          </ul>
        )}
        <button onClick={onOpenEdit} className="btn btn-primary">
          {data.name ? "Chỉnh sửa thông tin" : "Thêm thông tin"}
        </button>
      </div>
    </>
  );
}

export default ProfileDisplay;
