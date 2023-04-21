import { NavLink,Outlet } from "react-router-dom";
import './Header.css'

const Header = () =>{
    return <div>
    <div className="links">
    <NavLink to='/'className={({isActive})=>isActive? 'a' : 'b' } end><h2>Home</h2></NavLink>
    <NavLink to='/store' className={({isActive})=>isActive? 'a' : 'b' } end><h2>Store</h2></NavLink>
    <NavLink to='/about' className={({isActive})=>isActive? 'a' : 'b' } end><h2>About</h2></NavLink>
    <NavLink to='/contactus' className={({isActive})=>isActive? 'a' : 'b' } end><h2>Contact</h2></NavLink>
    </div>
        <h1 className="heading">
            The Generics
        </h1>
  
    <Outlet />
    </div>
}


export default Header;