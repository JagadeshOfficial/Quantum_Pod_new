
import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div className="footer-col">
                    <h3 className="logo text-gradient" style={{ marginBottom: '1rem' }}>{siteContent.brand.logoText}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        Transforming careers through AI-driven education. Join the revolution today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Linkedin size={20} color="var(--accent-primary)" style={{ cursor: 'pointer' }} />
                        <Twitter size={20} color="var(--accent-primary)" style={{ cursor: 'pointer' }} />
                        <Instagram size={20} color="var(--accent-primary)" style={{ cursor: 'pointer' }} />
                        <Facebook size={20} color="var(--accent-primary)" style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                <div className="footer-col">
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Our Offerings</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {siteContent.home.courseCategories.map((course) => (
                            <li key={course.id} style={{ marginBottom: '0.8rem' }}>
                                <Link to={course.link} className="footer-link" style={footerLinkStyle}>
                                    {course.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Company</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/about" className="footer-link" style={footerLinkStyle}>About Us</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/blogs" className="footer-link" style={footerLinkStyle}>Blogs</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/careers" className="footer-link" style={footerLinkStyle}>Careers</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/contact" className="footer-link" style={footerLinkStyle}>Contact Us</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/terms" className="footer-link" style={footerLinkStyle}>Terms & Conditions</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/privacy" className="footer-link" style={footerLinkStyle}>Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.2rem' }}>More</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/teach" className="footer-link" style={footerLinkStyle}>Teach at QuantumPod</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/hire" className="footer-link" style={footerLinkStyle}>Hire from Us</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/refer" className="footer-link" style={footerLinkStyle}>Refer & Earn</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>© 2025 Quantum Pod Technologies. All rights reserved.</p>
            </div>
        </footer>
    );
};

const footerLinkStyle = { color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' };

export default Footer;
