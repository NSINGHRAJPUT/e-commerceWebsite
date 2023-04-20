import { Link,Outlet } from "react-router-dom";
import './Header.css'

const Header = () =>{
    return <div>
    <div className="links">
    <Link to='/'><h2>Home</h2></Link>
    <Link to='/store'><h2>Store</h2></Link>
    <Link to='/about'><h2>About</h2></Link>
    </div>
        <h1 className="heading">
            The Generics
        </h1>
  
    <Outlet />
    </div>
}


export default Header;