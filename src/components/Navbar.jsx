
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Laptop } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <header>
            <div className="container nav-container">
                <Link to="/" className="logo text-gradient">
                    <Laptop size={32} color="#00d4ff" />
                    {siteContent.brand.logoText}
                </Link>
                <nav>
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
                <button className="btn btn-primary">Login / Signup</button>
            </div>
        </header>
    );
};

export default Navbar;
