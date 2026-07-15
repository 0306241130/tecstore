import products from "../data/product";
import ProductCard from "./ProductCard";
import ProductInfor from "./ProductInfor";
export default function ProductList() {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          brand={product.brand}
        >
          <ProductInfor
            catogery={product.catogery}
            discount={product.discount}
            stock={product.stock}
          />
        </ProductCard>
      ))}
    </>
  );
}
