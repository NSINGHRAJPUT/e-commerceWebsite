
import './App.css';
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/About/About'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from './components/Cart/Cart';
import CartProvider from './Store/ContextProvider';
import Error from './components/Header/Error';
import Contactus from './components/Contact/Contactus';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Header />,
    errorElement:<Error/>,
    children:[
      {path:'/', element: <div><Home /><Cart/></div>},
      {path:'/about', element: <About/>},
      {path:'/store', element:<Products/>},
      {path:'/contactus', element : <Contactus/>}
    ]
  }
  
])

function App() {
  return (
    <CartProvider>
     <RouterProvider router={router}></RouterProvider> 
     
    </CartProvider>
  );
}

export default App;
