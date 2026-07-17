export default function ProductInfor({ catogery, discount, stock }) {
  return (
    <>
      <p className="m-0">{catogery}</p>
      <p className="m-0 text-danger">giảm giá: {discount}%</p>
      <p className="m-0">còn lại: {stock}</p>
    </>
  );
}
