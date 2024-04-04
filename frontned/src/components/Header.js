// Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className={`menu-icon ${showMenu ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul ref={menuRef} className={`nav-links ${showMenu ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/search" className="nav-link" onClick={closeMenu}>Search</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
