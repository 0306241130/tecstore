export default function ProductCard({ children, name, brand, price }) {
  return (
    <>
      <div className="car-main">
        <div className="content-product">
          <h3>{name}</h3>
          <article className="info-product">
            <p>{brand}</p>
            <p>{price.toLocaleString("vi-VN")}VNĐ</p>
            {children}
            <button>Chi Tiết</button>
          </article>
        </div>
      </div>
    </>
  );
}
