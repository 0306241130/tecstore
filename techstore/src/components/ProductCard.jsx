export default function ProductCard({ children, name, brand, price, img }) {
  return (
    <>
      <div class="card text-start">
        <img class="card-img-top" src={img} alt="Title" height={300} />
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <article className="card-text">
            <div className="d-flex  justify-content-between align-items-end flex-wrap">
              <div className="">
                <p className=" m-0">
                  <i>{brand}</i>
                </p>
                <p className=" m-0">
                  <b>{price.toLocaleString("vi-VN")}đ</b>
                </p>
                {children}
              </div>
              <div className="">
                {" "}
                <button className="btn btn-success">Tìm hiểu thêm</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
