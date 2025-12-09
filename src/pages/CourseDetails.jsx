
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { siteContent } from '../data/content';
import { CheckCircle, Calendar, Clock, Monitor, Download, Phone, Mail, Star } from 'lucide-react';

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = siteContent.courses[courseId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    if (!course) {
        return <Navigate to="/" replace />;
    }

    return (
        <main>
            {/* Course Hero */}
            <section className="course-hero" style={{ background: course.heroImage ? `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.95)), url(${course.heroImage}) center/cover fixed` : undefined }}>
                <div className="container course-hero-content animate-fade-in">
                    <div className="course-hero-text">
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>CERTIFICATION PROGRAM</span>
                        <h1 className="hero-title" style={{ fontSize: '3rem', margin: '1rem 0' }}>{course.title}</h1>
                        <div style={{
                            background: 'rgba(10, 132, 255, 0.1)',
                            border: '1px solid var(--accent-primary)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            display: 'inline-block',
                            marginBottom: '1.5rem',
                            color: 'var(--accent-primary)',
                            fontWeight: 'bold'
                        }}>
                            90% Career Transition Rate — in Just 6 Months!
                        </div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Join {course.enrolled} students already enrolled in this top-rated program.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary">Request Callback</button>
                            <button className="btn btn-secondary"><Download size={18} style={{ marginRight: '8px' }} /> Download Handbook</button>
                        </div>
                    </div>
                    <div className="course-hero-image" style={{ width: '100%', maxWidth: '400px' }}>
                        <div className="inquiry-form">
                            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Get Program Details</h3>
                            <div className="form-group"><input placeholder="Name" className="form-input" /></div>
                            <div className="form-group"><input placeholder="Email" className="form-input" /></div>
                            <div className="form-group"><input placeholder="Phone" className="form-input" /></div>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info */}
            <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)' }}>
                <div className="container" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>{course.enrolled}</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>Students Enrolled</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem' }}>{course.duration}</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>Duration</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--accent-tertiary)', fontSize: '1.5rem' }}>{course.hours}</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>Learning Hours</p>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Program Highlights</h2>
                    <div className="highlights-list">
                        {course.highlights.map((highlight, index) => (
                            <div key={index} className="card highlight-item">
                                <CheckCircle className="check-icon" />
                                <p>{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Batches */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Upcoming Batches</h2>
                    <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {course.batches.map((batch, index) => (
                            <div key={index} className="card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
                                <h3 style={{ marginBottom: '1rem' }}>{batch.name}</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--text-secondary)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {batch.start}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {batch.timing}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Monitor size={16} /> {batch.mode}</div>
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>Reserve Spot</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Tools & Technologies Covered</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                        {course.tools.map(tool => {
                            // Robust mapping for logos
                            const getLogoUrl = (name) => {
                                const n = name.toLowerCase();
                                // Languages & Core
                                if (n.includes('python')) return 'https://cdn.simpleicons.org/python/3776AB';
                                if (n.includes('java') && !n.includes('script')) return 'https://cdn.simpleicons.org/openjdk/000000';
                                if (n.includes('c++')) return 'https://cdn.simpleicons.org/cplusplus/00599C';

                                // Data Science / Analytics
                                if (n.includes('pandas')) return 'https://cdn.simpleicons.org/pandas/150458';
                                if (n.includes('numpy')) return 'https://cdn.simpleicons.org/numpy/013243';
                                if (n.includes('matplotlib')) return 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg';
                                if (n.includes('scikit')) return 'https://cdn.simpleicons.org/scikitlearn/F7931E';
                                if (n.includes('keras')) return 'https://cdn.simpleicons.org/keras/D00000';
                                if (n.includes('pytorch')) return 'https://cdn.simpleicons.org/pytorch/EE4C2C';
                                if (n.includes('tensorflow')) return 'https://cdn.simpleicons.org/tensorflow/FF6F00';
                                if (n.includes('opencv')) return 'https://cdn.simpleicons.org/opencv/5C3EE8';
                                if (n.includes('jupyter')) return 'https://cdn.simpleicons.org/jupyter/F37626';

                                // Visualization & BI
                                if (n.includes('power bi')) return 'https://cdn.simpleicons.org/powerbi/F2C811';
                                if (n.includes('tableau')) return 'https://cdn.simpleicons.org/tableau/E97627';
                                if (n.includes('excel')) return 'https://cdn.simpleicons.org/microsoftexcel/217346';
                                if (n.includes('sheets')) return 'https://cdn.simpleicons.org/googlesheets/34A853';
                                if (n.includes('data studio') || n.includes('looker')) return 'https://cdn.simpleicons.org/googlelookerstudio/4285F4';

                                // Cloud & DevOps
                                if (n.includes('aws')) return 'https://cdn.simpleicons.org/amazonaws/232F3E';
                                if (n.includes('azure')) return 'https://cdn.simpleicons.org/microsoftazure/0078D4';
                                if (n.includes('google cloud') || n.includes('gcp') || n.includes('bigquery')) return 'https://cdn.simpleicons.org/googlecloud/4285F4';
                                if (n.includes('docker')) return 'https://cdn.simpleicons.org/docker/2496ED';
                                if (n.includes('kubernetes')) return 'https://cdn.simpleicons.org/kubernetes/326CE5';
                                if (n.includes('jenkins')) return 'https://cdn.simpleicons.org/jenkins/D24939';
                                if (n.includes('terraform')) return 'https://cdn.simpleicons.org/terraform/7B42BC';

                                // Big Data
                                if (n.includes('spark')) return 'https://cdn.simpleicons.org/apachespark/E25A1C';
                                if (n.includes('hadoop')) return 'https://cdn.simpleicons.org/apachehadoop/66CCFF';
                                if (n.includes('kafka')) return 'https://cdn.simpleicons.org/apachekafka/231F20';
                                if (n.includes('airflow')) return 'https://cdn.simpleicons.org/apacheairflow/017CEE';
                                if (n.includes('snowflake')) return 'https://cdn.simpleicons.org/snowflake/29B5E8';
                                if (n.includes('databricks')) return 'https://cdn.simpleicons.org/databricks/FF3621';

                                // AI / Agentic
                                if (n.includes('openai')) return 'https://cdn.simpleicons.org/openai/412991';
                                if (n.includes('langchain')) return 'https://cdn.simpleicons.org/langchain/1C3C3C';
                                if (n.includes('hugging')) return 'https://cdn.simpleicons.org/huggingface/FFD21E';
                                if (n.includes('pinecone') || n.includes('vector')) return 'https://cdn.simpleicons.org/pinecone/1F1F1F'; // Fallback for vector DB

                                // Cyber Security
                                if (n.includes('kali')) return 'https://cdn.simpleicons.org/kalilinux/557C94';
                                if (n.includes('wireshark')) return 'https://cdn.simpleicons.org/wireshark/1679A7';
                                if (n.includes('metasploit')) return 'https://cdn.simpleicons.org/metasploit/921F24';
                                if (n.includes('burp')) return 'https://cdn.simpleicons.org/burpsuite/FF6633';
                                if (n.includes('splunk')) return 'https://cdn.simpleicons.org/splunk/000000';
                                if (n.includes('nessus')) return 'https://cdn.simpleicons.org/tenable/004273'; // Tenable makes Nessus
                                if (n.includes('nmap')) return 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Nmap_logo_2022.svg'; // No simpleicon

                                // Quantum
                                if (n.includes('qiskit')) return 'https://cdn.simpleicons.org/qiskit/6929C4';
                                if (n.includes('ibm q') || n.includes('ibm')) return 'https://cdn.simpleicons.org/ibm/052FAD';

                                // General
                                if (n.includes('sql')) return 'https://cdn.simpleicons.org/mysql/4479A1';
                                if (n.includes('github') || n.includes('git')) return 'https://cdn.simpleicons.org/github/000000';
                                if (n.includes('linux')) return 'https://cdn.simpleicons.org/linux/FCC624';

                                return null;
                            };

                            const logo = getLogoUrl(tool);

                            return (
                                <div key={tool} className="card" style={{
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.8rem',
                                    width: '130px',
                                    height: '130px',
                                    transition: 'transform 0.3s ease',
                                    background: 'rgba(0,0,0,0.05)'
                                }}>
                                    {logo ? (
                                        <img src={logo} alt={tool} style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
                                    ) : (
                                        <Monitor size={45} color="var(--accent-primary)" />
                                    )}
                                    <span style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.2' }}>{tool}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Learning Path</h2>
                    <div className="timeline">
                        {course.roadmap.map((step, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-number">{step.step || index + 1}</div>
                                <div className="timeline-content">
                                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <button className="btn btn-outline"><Download size={16} style={{ marginRight: '8px' }} /> Download Detailed Curriculum</button>
                    </div>
                </div>
            </section>

            {/* Reviews Section (New) */}
            {course.reviews && (
                <section className="section-padding">
                    <div className="container">
                        <h2 className="hero-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Student Reviews</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {course.reviews.map((review, idx) => (
                                <div key={idx} className="card">
                                    <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="gold" color="gold" />)}
                                    </div>
                                    <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"{review.text}"</p>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold' }}>{review.name}</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{review.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Footer CTA */}
            <section className="section-padding" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Ready to Upskill?</h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary">Enroll Now</button>
                        <button className="btn btn-secondary">Talk to Advisor</button>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default CourseDetails;
