import products from "../data/product";
import ProductCard from "./ProductCard";
import ProductInfor from "./ProductInfor";
export default function ProductList() {
  return (
    <>
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center g-2">
          {products.map((product) => (
            <div class="col">
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                brand={product.brand}
                img={product.img}
              >
                <ProductInfor
                  catogery={product.catogery}
                  discount={product.discount}
                  stock={product.stock}
                />
              </ProductCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
