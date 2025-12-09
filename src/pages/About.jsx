
import React from 'react';
import { siteContent } from '../data/content';
import { Target, Eye, Zap, Users, Award, Shield } from 'lucide-react';

const iconMap = {
    Target: <Target size={40} color="var(--accent-primary)" />,
    Eye: <Eye size={40} color="var(--accent-secondary)" />,
    Zap: <Zap size={32} color="var(--accent-primary)" />,
    Users: <Users size={32} color="var(--accent-secondary)" />,
    Award: <Award size={32} color="var(--accent-tertiary)" />,
    Shield: <Shield size={32} color="#0A84FF" />
};

const About = () => {
    const { about } = siteContent;

    return (
        <main>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `url(${about.hero.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}></div>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(255,255,255,0.85)',
                    zIndex: -1
                }}></div>

                <div className="container animate-fade-in">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{about.hero.title}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        {about.hero.subtitle}
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                            {iconMap[about.mission.icon]}
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{about.mission.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{about.mission.text}</p>
                    </div>
                    <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', borderLeft: '1px solid var(--accent-secondary)' }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                            {iconMap[about.vision.icon]}
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{about.vision.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{about.vision.text}</p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{about.story.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            {about.story.text}
                        </p>
                        <button className="btn btn-primary">Join Our Community</button>
                    </div>
                    <div style={{ flex: '1 1 400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                        <img src={about.story.image} alt="Our Story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Our Core Values</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {about.values.map((value, idx) => (
                            <div key={idx} className="card" style={{ textAlign: 'center', transition: 'transform 0.3s' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {iconMap[value.icon]}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{value.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey (Timeline) */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Our Journey</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {/* Connecting Line (Desktop) */}
                        <div style={{
                            position: 'absolute', top: '20px', left: '0', right: '0', height: '2px',
                            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                            zIndex: 0,
                            display: 'var(--desktop-only, block)' // Simplified for this view, logic handled by layout
                        }}></div>

                        {about.timeline.map((milestone, idx) => (
                            <div key={idx} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)',
                                    margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 0 20px var(--accent-primary)'
                                }}>
                                    <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }}></div>
                                </div>
                                <h3 style={{ fontSize: '2rem', color: 'var(--accent-primary)', opacity: 0.8 }}>{milestone.year}</h3>
                                <h4 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{milestone.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{milestone.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Meet the Minds</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
                        {about.team.map((member, idx) => (
                            <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden', width: '300px', textAlign: 'center' }}>
                                <div style={{ height: '320px', overflow: 'hidden' }}>
                                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="card-bg-img" />
                                </div>
                                <div style={{ padding: '1.5rem', background: 'var(--glass-bg)' }}>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats (Reused style) */}
            <section className="section-padding" style={{ background: 'linear-gradient(to right, var(--bg-primary), var(--bg-secondary))', borderTop: '1px solid var(--glass-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Making an Impact</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>10k+</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Learners Trained</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>30+</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Hiring Partners</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-tertiary)' }}>95%</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Completion Rate</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
