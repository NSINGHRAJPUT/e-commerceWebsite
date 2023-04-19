import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Products from "./components/products/Products";
import CartProvider from './store/CartProvider'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const  router = createBrowserRouter([
  {path:'/about', element: <About/>},
  {path:'/', element: <div><Cart placement='end' name='Cart'/>
  <Products/></div> }
])


function App() {
  return (
    <CartProvider>
    <RouterProvider router={router}/>
       
  
    </CartProvider>
  );
}

export default App;
