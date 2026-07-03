import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobile">Mobiles</a>
                <a href="/laptops">Laptops</a> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                
                
            </nav>
        </div>
    );
};

export default Header;