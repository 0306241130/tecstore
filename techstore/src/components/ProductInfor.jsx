export default function ProductInfor({ catogery, discount, stock }) {
  return (
    <>
      <p>{catogery}</p>
      <p>giảm giá: {discount}%</p>
      <p>còn lại: {stock}</p>
    </>
  );
}
