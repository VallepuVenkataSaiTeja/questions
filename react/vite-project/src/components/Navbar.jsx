import { Link, NavLink } from "react-router-dom";
import '../App.css'


function Navbar(){
    return (
        <div>
            <Link to='/'>Home</Link>
            <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : '')}>About</NavLink>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    )
}
export default Navbar;