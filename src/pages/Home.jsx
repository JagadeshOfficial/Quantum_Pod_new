
import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Brain, Clock, Briefcase, UserCheck, Laptop, Infinity, ChevronRight, Star, Download, CheckCircle } from 'lucide-react';

const iconMap = {
    Brain: <Brain size={32} color="var(--accent-secondary)" />,
    Clock: <Clock size={32} color="var(--accent-primary)" />,
    Briefcase: <Briefcase size={32} color="var(--accent-tertiary)" />,
    UserCheck: <UserCheck size={32} color="var(--accent-primary)" />,
    Laptop: <Laptop size={32} color="var(--accent-secondary)" />,
    Infinity: <Infinity size={32} color="var(--accent-tertiary)" />,
};

const Home = () => {
    const { home } = siteContent;

    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg-glow" />
                <div className="container hero-content animate-fade-in">
                    <div className="hero-text">
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
                            Future-Ready Learning
                        </span>
                        <h1 className="hero-title" style={{ fontWeight: '800' }}>{home.hero.title}</h1>
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
                        <p className="hero-subtitle" style={{ margin: '0 0 2.5rem 0', maxWidth: '100%' }}>{home.hero.subtitle}</p>
                        <div className="hero-actions" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <button className="btn btn-primary">Login / Signup</button>
                            <button className="btn btn-secondary"><Download size={18} style={{ marginRight: '8px' }} /> Download Handbook</button>
                            <a href="#courses" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>Explore Courses</a>
                        </div>
                    </div>

                    <div className="hero-form-card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Book a Live Class Now</h3>

                        <button className="google-btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4" />
                                <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853" />
                                <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05" />
                                <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L14.9891 2.37682C13.4632 0.953182 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335" />
                            </svg>
                            Login with Google
                        </button>

                        <div className="form-divider">OR</div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <input type="text" placeholder="Name" className="form-input" required />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <input type="email" placeholder="E-mail" className="form-input" required />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <input type="tel" placeholder="Phone Number" className="form-input" required />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <select className="form-input" style={{ appearance: 'none', cursor: 'pointer' }} defaultValue="" required>
                                    <option value="" disabled>Highest Qualification</option>
                                    <option value="highschool">High School</option>
                                    <option value="undergrad">Undergraduate</option>
                                    <option value="postgrad">Postgraduate</option>
                                    <option value="working">Working Professional</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: '8px' }}>
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)', padding: '2rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Industry-Leading Experts</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Learn from the best</p>
                    </div>
                    <div style={{ padding: '0 2rem', borderLeft: '1px solid var(--glass-border)', borderRight: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>1:1 Mentored</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>by Industry Leaders</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--accent-tertiary)', marginBottom: '0.5rem' }}>30+</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Hiring Partners Network</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>55%</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Avg Salary Hike</p>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Get Offers from top companies
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', opacity: 0.8, alignItems: 'center' }}>
                        {/* Using realistic looking logos from Wikimedia */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="Amazon" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Explore Our Courses</h2>
                    <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {/* Explicitly filtering/ordering for the 4 requested main courses first */}
                        {home.courseCategories
                            .filter(c => ['data-analysis', 'data-science', 'ai-ml', 'agentic-ai'].includes(c.id))
                            .map((course) => {
                                // High-quality Tech Images from Pexels/Unsplash
                                let bgImage = "";
                                if (course.id === 'data-analysis') bgImage = "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800";
                                if (course.id === 'data-science') bgImage = "https://images.pexels.com/photos/1748387/pexels-photo-1748387.jpeg?auto=compress&cs=tinysrgb&w=800";
                                if (course.id === 'ai-ml') bgImage = "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800";
                                if (course.id === 'agentic-ai') bgImage = "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800";

                                return (
                                    <Link to={course.link} key={course.id} className="course-card">
                                        <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                                background: `url(${bgImage}) center/cover no-repeat`,
                                                transition: 'transform 0.5s ease'
                                            }} className="card-bg-img" />
                                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, var(--bg-secondary), transparent)' }}></div>
                                        </div>
                                        <div className="course-info">
                                            <h3 className="course-title" style={{ fontSize: '1.4rem' }}>{course.title}</h3>
                                            <div className="course-meta" style={{ marginBottom: '1.5rem' }}>
                                                <span style={{ background: 'rgba(10, 132, 255, 0.1)', padding: '4px 8px', borderRadius: '4px', color: 'var(--accent-primary)', fontSize: '0.8rem' }}>Beginner to Pro</span>
                                            </div>
                                            <span className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', borderRadius: '8px', width: '100%' }}>
                                                View Program <ChevronRight size={16} />
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </section>

            {/* Why Choose Quantum Pod Section */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Why Choose Quantum Pod?</h2>
                    <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {home.whyChoose.map((category, idx) => (
                            <div key={idx} className="card" style={{ height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ background: 'rgba(10, 132, 255, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                        {iconMap[Object.keys(iconMap)[idx % Object.keys(iconMap).length]]}
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{category.title}</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {category.items.map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                                            <CheckCircle size={16} color="var(--accent-primary)" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Your Mentors Section */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Learn from the Industry's Best</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        {home.instructors.map((instructor, idx) => (
                            <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden', maxWidth: '300px', width: '100%', textAlign: 'center' }}>
                                <div style={{ height: '250px', width: '100%', overflow: 'hidden' }}>
                                    <img src={instructor.image} alt={instructor.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="card-bg-img" />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{instructor.name}</h3>
                                    <p style={{ color: 'var(--accent-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{instructor.role}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{instructor.ex}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding">
                <div className="container" style={{ maxWidth: '100%' }}>
                    <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Success Stories</h2>

                    {/* Wrapped in marquee-container for fade masks */}
                    <div className="marquee-container">
                        <div className="animate-scroll">
                            {/* Tripled list for infinite scroll */}
                            {[...home.testimonials, ...home.testimonials, ...home.testimonials].map((t, i) => (
                                <div key={i} className="testimonial-card">
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {[...Array(t.rating)].map((_, r) => <Star key={r} size={16} fill="#FFD700" color="#FFD700" />)}
                                    </div>
                                    <p className="testimonial-quote">{t.text}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '50px', height: '50px', borderRadius: '50%',
                                            background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                                        }}></div>
                                        <div>
                                            <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{t.name}</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;
