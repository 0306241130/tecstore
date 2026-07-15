import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/product";
function App() {
  return (
    <>
      <Header />
      <span>Có {products.length} sản phẩm</span>
      <ProductList />
    </>
  );
}

export default App;
