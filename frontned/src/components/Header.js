// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className={`menu-icon ${showMenu ? 'open' : ''}`}></div>
                </div>
                <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li>
                    <li><Link to="/search" className="nav-link">Search</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
