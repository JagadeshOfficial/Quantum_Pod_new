
import React from 'react';
import { CheckCircle, Send, Mic, Video, Users, BookOpen, Award, Globe } from 'lucide-react';

const Teach = () => {
    return (
        <main>
            {/* Hero Section */}
            <section style={{
                height: '70vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', // Mentor/teaching image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: -1 }}></div>

                <div className="container animate-fade-in" style={{ zIndex: 1 }}>
                    <span style={{
                        display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '50px',
                        background: 'rgba(0, 212, 255, 0.1)', border: '1px solid var(--accent-primary)',
                        color: 'var(--accent-primary)', fontWeight: 'bold', marginBottom: '1.5rem',
                        backdropFilter: 'blur(5px)'
                    }}>
                        Join the Elite Faculty
                    </span>
                    <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Inspire the Next Generation</h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
                        Share your expertise, monetize your skills, and build your personal brand with Quantum Pod's global platform.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary" onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}>
                            Apply as Mentor
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)', padding: '2rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', margin: 0 }}>500+</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Active Mentors</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', margin: 0 }}>₹1.5L</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Avg. Monthly Earnings</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-tertiary)', margin: 0 }}>10k+</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Lives Impacted</p>
                    </div>
                </div>
            </section>

            {/* Why Teach With Us (Grid) */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Why Top Experts Choose Us</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: Globe, title: "Global Reach", desc: "Teach students from 20+ countries without leaving your home." },
                            { icon: BookOpen, title: "Curriculum Support", desc: "Don't worry about slides. Our R&D team provides world-class content." },
                            { icon: Users, title: "Community Access", desc: "Network with other industry leaders from Google, Amazon, and Microsoft." },
                            { icon: Award, title: "Brand Building", desc: "Get featured in our webinars, blogs, and marketing campaigns." },
                            { icon: Video, title: "Premium Tools", desc: "Access to Zoom, LMS, and coding playgrounds worth $500/mo." },
                            { icon: Mic, title: "Speaking Opportunities", desc: "Exclusive invites to speak at our annual tech summits." }
                        ].map((item, idx) => (
                            <div key={idx} className="card" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                                }}>
                                    <item.icon size={30} color="var(--accent-primary)" />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section - Split Layout */}
            <section id="apply-form" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
                <div className="container">
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '4rem', alignItems: 'center', background: 'rgba(0,0,0,0.3)',
                        padding: '4rem', borderRadius: '30px', border: '1px solid var(--glass-border)'
                    }}>

                        {/* Left Side: Content */}
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Share Your Knowledge?</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                                The application process is simple. Once you apply, our academic team will review your profile and schedule a short demo session.
                            </p>

                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Eligibility Checklist:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "3+ Years of Industry Experience",
                                    "Passion for teaching and mentoring",
                                    "Available for at least 5 hours/week",
                                    "Strong communication skills"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                                        <CheckCircle size={20} color="var(--accent-secondary)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Form */}
                        <div className="card" style={{ padding: '2.5rem', background: 'rgba(30,30,40,0.95)' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={labelStyle}>First Name</label>
                                        <input type="text" placeholder="John" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Last Name</label>
                                        <input type="text" placeholder="Doe" style={inputStyle} />
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>Email</label>
                                    <input type="email" placeholder="john@company.com" style={inputStyle} />
                                </div>

                                <div>
                                    <label style={labelStyle}>LinkedIn URL</label>
                                    <input type="text" placeholder="linkedin.com/in/johndoe" style={inputStyle} />
                                </div>

                                <div>
                                    <label style={labelStyle}>Primary Expertise</label>
                                    <select style={inputStyle}>
                                        <option>Select Domain</option>
                                        <option>Data Science & AI</option>
                                        <option>Full Stack Development</option>
                                        <option>Cyber Security</option>
                                        <option>Cloud Computing</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStyle}>Brief Bio</label>
                                    <textarea rows="4" placeholder="Tell us about your experience..." style={inputStyle}></textarea>
                                </div>

                                <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                    Submit Application <Send size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

// Styles
const labelStyle = {
    display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600'
};

const inputStyle = {
    width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none'
};

export default Teach;
