
import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Briefcase, MapPin, Clock, ArrowRight, Globe, Heart, Zap, Coffee, Check, DollarSign } from 'lucide-react';

const iconMap = {
    Globe: <Globe size={32} color="var(--accent-primary)" />,
    Heart: <Heart size={32} color="var(--accent-secondary)" />,
    Zap: <Zap size={32} color="var(--accent-tertiary)" />,
    Coffee: <Coffee size={32} color="#0A84FF" />
};

const Careers = () => {
    const { careers } = siteContent;
    const [selectedDept, setSelectedDept] = useState('All');

    // Get unique departments
    const departments = ['All', ...new Set(careers.positions.map(p => p.dept))];

    // Filter logic
    const filteredJobs = careers.positions.filter(job => selectedDept === 'All' || job.dept === selectedDept);

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
                    backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.85)', zIndex: -1 }}></div>

                <div className="container animate-fade-in" style={{ zIndex: 1 }}>
                    <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Do Your Best Work Here</h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        Join a team of visionaries, builders, and educators shaping the future of AI.
                    </p>
                    <button className="btn btn-primary" onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}>
                        View Open Positions <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </section>

            {/* Perks Section (Grid with Glass Cards) */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Why Join Quantum Pod?</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>More than just a job. It's a lifestyle.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {careers.perks.map((perk, idx) => (
                            <div key={idx} className="card" style={{ textAlign: 'center', padding: '2.5rem', transition: 'transform 0.3s' }}>
                                <div style={{
                                    width: '70px', height: '70px', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 1.5rem'
                                }}>
                                    {iconMap[perk.icon]}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{perk.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at Quantum Pod (Gallery) */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Life at Quantum Pod</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                We are a diverse group of thinkers and doers. Whether it's our annual hackathon, team retreats in the Himalayas, or just casual Friday gaming sessions, we believe that great culture breeds great product.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--accent-primary)" /> Inclusive Environment</li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--accent-primary)" /> Meritocratic Growth</li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--accent-primary)" /> Transparency First</li>
                            </ul>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <img src={careers.gallery[0]} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px', marginTop: '3rem' }} alt="Office" />
                            <img src={careers.gallery[1]} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} alt="Team" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section id="openings" className="section-padding" style={{ background: 'linear-gradient(to top, var(--bg-secondary), var(--bg-primary))' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Current Openings</h2>

                        {/* Filter Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                            {departments.map(dept => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDept(dept)}
                                    style={{
                                        padding: '0.6rem 1.5rem', borderRadius: '30px', border: '1px solid var(--glass-border)',
                                        background: selectedDept === dept ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                                        color: selectedDept === dept ? '#FFF' : 'var(--text-secondary)',
                                        cursor: 'pointer', fontWeight: 'bold'
                                    }}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {filteredJobs.length > 0 ? filteredJobs.map(job => (
                            <div key={job.id} className="card" style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '1.5rem',
                                transition: 'all 0.3s',
                                borderLeft: '4px solid var(--accent-secondary)'
                            }}>
                                <div style={{ flex: '1 1 400px' }}>
                                    <div style={{ display: 'flex', gap: '10px', marginBottom: '0.8rem' }}>
                                        <span style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '4px', background: 'rgba(10, 132, 255, 0.1)', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{job.dept}</span>
                                        {job.salary && <span style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '4px', background: 'rgba(0, 255, 0, 0.1)', color: '#4caf50', display: 'flex', alignItems: 'center', gap: '4px' }}><DollarSign size={12} /> {job.salary}</span>}
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{job.role}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>{job.desc}</p>
                                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> {job.location}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Briefcase size={16} /> {job.type}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={16} /> 2 days ago</span>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Apply Now <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )) : (
                            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                                No openings found in this department. Check back later!
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
