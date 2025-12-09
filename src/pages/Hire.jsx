
import React from 'react';
import { Building, Users, Award, Search, ArrowRight, CheckCircle, Database, Code, Shield } from 'lucide-react';

const Hire = () => {
    // Mock candidate data for preview
    const candidates = [
        { id: 1, role: "Data Scientist", skills: ["Python", "TensorFlow", "SQL"], exp: "Fresh Graduate", education: "M.Tech, IIT Madras", icon: Database },
        { id: 2, role: "Full Stack Dev", skills: ["React", "Node.js", "MongoDB"], exp: "1 Year Exp", education: "B.E, BITS Pilani", icon: Code },
        { id: 3, role: "Cyber Security Analyst", skills: ["Ethical Hacking", "Linux", "Network Security"], exp: "Fresh Graduate", education: "B.Tech, NIT Trichy", icon: Shield },
    ];

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
                overflow: 'hidden',
                background: 'radial-gradient(circle at center, #1a1a2e 0%, #000 100%)'
            }}>
                <div className="container animate-fade-in">
                    <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Hire <span className="text-gradient">Day-1 Ready</span><br />Tech Talent
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        Skip the resume screening. Access our pool of pre-vetted, project-based trained developers and data scientists. Zero hiring fees.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary" onClick={() => document.getElementById('hire-form').scrollIntoView({ behavior: 'smooth' })}>
                            Start Hiring
                        </button>
                        <button className="btn btn-outline">Download Placement Brochure</button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ borderBottom: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '3rem 0', textAlign: 'center' }}>
                    {[
                        { val: "300+", label: "Hiring Partners" },
                        { val: "0", label: "Hiring Cost" },
                        { val: "48 Hrs", label: "Turnaround Time" },
                        { val: "85%", label: "Selection Ratio" }
                    ].map((stat, idx) => (
                        <div key={idx} style={{ borderRight: idx !== 3 ? '1px solid var(--glass-border)' : 'none' }}>
                            <h3 style={{ fontSize: '2.5rem', color: '#fff', margin: 0 }}>{stat.val}</h3>
                            <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Talent Pool Preview */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Browse Our Talent</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>A sneak peek into our latest graduating cohort.</p>
                        </div>
                        <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>View All Profiles</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {candidates.map(candidate => (
                            <div key={candidate.id} className="card" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <div style={{ padding: '0.8rem', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '12px' }}>
                                        <candidate.icon size={28} color="var(--accent-primary)" />
                                    </div>
                                    <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'var(--bg-secondary)', height: 'fit-content' }}>
                                        Active
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{candidate.role}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{candidate.education}</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Experince: {candidate.exp}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {candidate.skills.map(skill => (
                                        <span key={skill} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: '4px', border: '1px solid var(--glass-border)', color: '#ccc' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%' }}>View Profile</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Gen Form */}
            <section id="hire-form" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <div className="card" style={{ padding: '4rem 3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Hire Your Next Superstars</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                            Fill out the form below and our Corporate Relations team will send you curated profiles within 24 hours.
                        </p>

                        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', textAlign: 'left' }}>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={labelStyle}>Company Name</label>
                                <input type="text" placeholder="e.g. Acme Corp" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>HR Contact Name</label>
                                <input type="text" placeholder="John Doe" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Official Email</label>
                                <input type="email" placeholder="john@acme.com" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone Number</label>
                                <input type="tel" placeholder="+91 99999 99999" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Role Hiring For</label>
                                <select style={inputStyle}>
                                    <option>Data Scientist</option>
                                    <option>Full Stack Developer</option>
                                    <option>AI Engineer</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary" style={{ gridColumn: '1 / -1', marginTop: '1rem', padding: '1rem', fontSize: '1.1rem' }}>
                                Submit Hiring Request
                            </button>
                        </form>
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

export default Hire;
