
import './App.css';
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/About/About'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from './components/Cart/Cart';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Header />,
    children:[
      {path:'/', element: <div><Home /><Cart/></div>},
      {path:'/about', element: <About/>},
      {path:'/store', element:<Products/>}
    ]
  }
  
])

function App() {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider> 
     
    </div>
  );
}

export default App;
