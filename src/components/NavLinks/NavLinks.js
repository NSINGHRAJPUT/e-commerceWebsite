import './NavLinks.css'
import { NavLink } from 'react-router-dom'

const NavLinks = () =>{

    return <div className="nav-links">
        <NavLink to='/' className={({isActive})=>(isActive? 'a':'b')} end>Home</NavLink>
        <NavLink to = '/about'   className={({isActive})=>(isActive? 'a':'b')} end>about</NavLink>
    </div>
}

export default NavLinks