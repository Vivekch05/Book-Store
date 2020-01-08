import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return(
        <nav className="nav-menu">
            <NavLink to = "/"className="nav-menu-link" >Home</NavLink>
            <NavLink to = "/books" className="nav-menu-link" >Books</NavLink>
            <NavLink to = "/cart" className="nav-menu-link" >Cart</NavLink>
            <NavLink to = "/checkout" className="nav-menu-link" >CheckOut</NavLink>
            <NavLink to = "/managebooks" className="nav-menu-link" >Manage Books</NavLink>
            <NavLink to = "/contact" className="nav-menu-link" >Contact</NavLink>
            <NavLink to = "/login"className="nav-menu-link"  >Login</NavLink>
            <NavLink to = "/signup"className="nav-menu-link"  >SignUp</NavLink>
        </nav>
    )
}

export default Header;