import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/receptek" className="nav-link">Recept lista</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/kereso" className="nav-link">Kereső</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/admin" className="nav-link">Admin</NavLink>
            </li>
        </nav>
    )
}
export default Navbar;