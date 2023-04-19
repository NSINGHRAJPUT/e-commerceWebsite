import Cart from "./components/Cart/Cart";
import Products from "./components/products/Products";
import CartProvider from './store/CartProvider'




function App() {
  return (
    <CartProvider>
    <div className="App">
    <Cart placement='end' name='Cart'/>
    <Products/>      
    </div>
    </CartProvider>
  );
}

export default App;
