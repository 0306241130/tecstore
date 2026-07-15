import { useState } from "react";

export default function Header() {
  const [sateTile, setTile] = useState("TechStore");
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState("");
  return (
    <>
      <div className="content-header">
        <header>
          <h1>{sateTile}</h1>
          <p>Website bán đồ điện tử</p>
        </header>
        <span>đã nhấn {count} lần</span>
        <br />
        <button
          onClick={() => {
            setTile("Cửa hàng điện tử");
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            // setCount((count) => count + 1);
            // setCount((count) => count + 1);
            // setCount((count) => count + 1);
            // console.log(count);
          }}
        >
          Click
        </button>
        <br />
        <input
          type="text"
          value={product}
          placeholder="nhập sản phẩm cần tìm"
          onChange={(e) => setProduct(e.target.value)}
        />
        <p>bạn đang tìm: {product}</p>
      </div>
    </>
  );
}
