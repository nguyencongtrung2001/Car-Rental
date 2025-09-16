import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCar, FaBars, FaTimes } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navList = [
        { id: 1, title: "Home", link: "/home" }, // ✅ Sửa từ "/" thành "/home"
        { id: 2, title: "Vehicles", link: "/vehicles" },
        { id: 3, title: "Detail", link: "/detail" },
        { id: 4, title: "About Us", link: "/about" },
        { id: 5, title: "Contact Us", link: "/contact" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header__logo'>
                    <FaCar className='icon-logo'/>
                    <h1>Car Rental</h1>
                </div>

                <nav className={`header__nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <ul className='nav-link'>
                        {navList.map((nav) => (
                            <li key={nav.id}>
                                <NavLink 
                                    to={nav.link}
                                    className={({ isActive }) => 
                                        isActive ? 'nav-item active' : 'nav-item'
                                    }
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {nav.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='header__contact'>
                    <FaPhoneAlt className='icon-contact'/>
                    <div className='contact-info'>
                        <p className='text-help'>Need help?</p>
                        <a href="tel:+9962471689">+996 247-1689</a>
                    </div>
                </div>

                <button className='mobile-menu-toggle' onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Header;