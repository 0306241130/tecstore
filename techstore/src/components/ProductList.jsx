import products from "../data/product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          cartogery={product.cartogery}
        />
      ))}
    </>
  );
}
