import React from 'react';
import {NavLink} from 'react-router-dom';
import './BookStore.css';
const Header = () => {
    return(
        <nav className="nav-menu">
            <NavLink to = "/"className="nav-menu-link" >Home</NavLink>
            <NavLink to = "/books" className="nav-menu-link" >Books</NavLink>
            <NavLink to = "/cart" className="nav-menu-link" >Cart</NavLink>
            <NavLink to = "/checkout" className="nav-menu-link" >CheckOut</NavLink>
            <NavLink to = "/managebooks" className="nav-menu-link" >Manage Books</NavLink>
            <NavLink to = "/manageOrders" className="nav-menu-link" >Manage Orders</NavLink>
            <NavLink to = "/contact" className="nav-menu-link" >Contact</NavLink>
        </nav>
    )
}

export default Header;