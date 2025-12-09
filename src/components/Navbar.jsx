
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Laptop } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header>
            <div className="container nav-container">
                <Link to="/" className="logo text-gradient" style={{ zIndex: 102 }}>
                    <Laptop size={32} color="#0A84FF" />
                    {siteContent.brand.logoText}
                </Link>

                <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        {siteContent.brand.navLinks.map((link) => {
                            if (link.name === "Courses") {
                                return (
                                    <li key={link.name} className="dropdown">
                                        <span
                                            className={`nav-link ${location.pathname.includes('/courses') ? 'active' : ''}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
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
                                                    onClick={() => setIsMobileMenuOpen(false)}
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
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="mobile-only">
                            <button className="btn btn-primary" style={{ width: '100%' }}>Login / Signup</button>
                        </li>
                    </ul>
                </div>

                <div className="desktop-only">
                    <button className="btn btn-primary">Login / Signup</button>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <span style={{ fontSize: '24px' }}>✕</span> : <span style={{ fontSize: '24px' }}>☰</span>}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
