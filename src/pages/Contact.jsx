
import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';

const Contact = () => {
    const { contact } = siteContent;
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <main>
            {/* Immersive Hero */}
            <section style={{
                position: 'relative',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}></div>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,1))',
                    zIndex: -1
                }}></div>

                <div className="container animate-fade-in" style={{ zIndex: 1, marginTop: '-3rem' }}>
                    <span style={{
                        display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '50px',
                        background: 'rgba(10, 132, 255, 0.1)', border: '1px solid var(--accent-primary)',
                        color: 'var(--accent-primary)', fontWeight: 'bold', marginBottom: '1.5rem',
                        backdropFilter: 'blur(5px)'
                    }}>
                        Start Your Conversation
                    </span>
                    <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Let's Build Your Future</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Visit our HQ at Capital Park or drop us a message. We are here to guide you 24/7.
                    </p>
                </div>
            </section>

            {/* Overlapping Content Section */}
            <section style={{ paddingBottom: '5rem', marginTop: '-100px', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem',
                    }}>
                        {/* Interactive Form Card */}
                        <div className="card" style={{ padding: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: 'rgba(255, 255, 255, 0.95)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ padding: '10px', background: 'rgba(10, 132, 255, 0.1)', borderRadius: '12px' }}>
                                    <MessageCircle size={32} color="var(--accent-primary)" />
                                </div>
                                <h2 style={{ fontSize: '2rem', margin: 0 }}>Write to Us</h2>
                            </div>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="form-group">
                                        <label style={labelStyle}>Full Name</label>
                                        <input type="text" placeholder="John Doe" style={inputStyle} />
                                    </div>
                                    <div className="form-group">
                                        <label style={labelStyle}>Email Address</label>
                                        <input type="email" placeholder="john@example.com" style={inputStyle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label style={labelStyle}>Phone Number</label>
                                    <input type="tel" placeholder="+91 99999 99999" style={inputStyle} />
                                </div>
                                <div className="form-group">
                                    <label style={labelStyle}>Program of Interest</label>
                                    <select style={inputStyle}>
                                        <option>Select a Program</option>
                                        {siteContent.home.courseCategories.slice(0, 5).map(c => <option key={c.id}>{c.title}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label style={labelStyle}>Message</label>
                                    <textarea placeholder="Tell us about your career goals..." rows="5" style={inputStyle}></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                                    Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                                </button>
                            </form>
                        </div>

                        {/* Info & Map Stack */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Address Card */}
                            <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'start', gap: '1.5rem', background: 'rgba(255, 255, 255, 0.8)' }}>
                                <div style={{ ...iconBoxStyle, background: 'rgba(255, 215, 0, 0.1)' }}><MapPin size={24} color="#FFD700" /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Visit Our HQ</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        {contact.address}<br />
                                        <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Landmark: Near Cyber Towers</span>
                                    </p>
                                </div>
                            </div>

                            {/* Contact Details Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <Mail size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
                                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contact.email}</p>
                                </div>
                                <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <Phone size={32} color="var(--accent-tertiary)" style={{ marginBottom: '1rem' }} />
                                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Phone</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contact.phone}</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="card" style={{ padding: 0, height: '300px', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                <iframe
                                    src={contact.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Everything you need to know about joining Quantum Pod.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {contact.faqs.map((faq, idx) => (
                            <div key={idx} className="card"
                                style={{
                                    padding: '1.5rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    border: openFaq === idx ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)'
                                }}
                                onClick={() => toggleFaq(idx)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '1.1rem', margin: 0, color: openFaq === idx ? 'var(--accent-primary)' : 'var(--text-primary)' }}>{faq.q}</h4>
                                    {openFaq === idx ? <ChevronUp size={20} color="var(--accent-primary)" /> : <ChevronDown size={20} />}
                                </div>
                                {openFaq === idx && (
                                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

// Styles
const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    fontWeight: '600'
};

const inputStyle = {
    background: 'rgba(0, 0, 0, 0.05)',
    border: '1px solid var(--glass-border)',
    borderRadius: '8px',
    padding: '1rem',
    color: 'var(--text-primary)',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    fontFamily: 'inherit'
};

const iconBoxStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

export default Contact;
