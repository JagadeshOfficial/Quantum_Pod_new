
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Laptop, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header>
            <div className="container nav-container">
                <Link to="/" className="logo text-gradient" onClick={closeMenu}>
                    <Laptop size={32} color="#00E5FF" />
                    {siteContent.brand.logoText}
                </Link>

                {/* Mobile Toggle Button */}
                <button className="mobile-nav-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        {siteContent.brand.navLinks.map((link) => {
                            if (link.name === "Courses") {
                                return (
                                    <li key={link.name} className="dropdown">
                                        <span
                                            className={`nav-link ${location.pathname.includes('/courses') ? 'active' : ''}`}
                                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                                        >
                                            {link.name} <span style={{ fontSize: '0.7em' }}>▼</span>
                                        </span>
                                        <div className="dropdown-content">
                                            {siteContent.home.courseCategories.map((category) => (
                                                <Link
                                                    key={category.id}
                                                    to={category.link}
                                                    className="dropdown-item"
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                );
                            }
                            return (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="desktop-auth">
                    <button className="btn btn-primary">Login / Signup</button>
                </div>

                {/* Mobile Navigation Overlay */}
                <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
                    <div className="mobile-nav-content">
                        <ul className="mobile-nav-links">
                            {siteContent.brand.navLinks.map((link) => (
                                <li key={link.name} onClick={closeMenu}>
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mobile-auth-btn">Login / Signup</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
