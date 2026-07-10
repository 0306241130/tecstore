import './App.css'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
function App() {
  
  return (
    <>
      <Header/>
      <ProductCard id = {1} name= "MacBook Air M4" cartogery="Apple" price={28999900}/>
      <ProductList/>
      
    </>
  )
}

export default App
