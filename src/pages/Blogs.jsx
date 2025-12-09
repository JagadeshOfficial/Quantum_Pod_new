
import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Calendar, User, ArrowRight, Search, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const { blogs } = siteContent;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

    // Filter logic
    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredBlog = blogs[0]; // Assuming first one is featured

    return (
        <main>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0 4rem',
                background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
                textAlign: 'center'
            }}>
                <div className="container animate-fade-in">
                    <span style={{
                        display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '50px',
                        background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)',
                        color: 'var(--accent-secondary)', fontWeight: 'bold', marginBottom: '1.5rem'
                    }}>
                        Quantum Insights
                    </span>
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Explore the Future of Tech</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Deep dives into AI, Data Science, and Engineering. Curated for the ambitious learner.
                    </p>

                    {/* Search & Filter Bar */}
                    <div style={{
                        maxWidth: '800px', margin: '0 auto',
                        background: 'rgba(255,255,255,0.05)', borderRadius: '50px', padding: '0.5rem',
                        border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center',
                        backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        <div style={{ padding: '0 1.5rem' }}><Search size={22} color="var(--text-secondary)" /></div>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                background: 'transparent', border: 'none', color: '#fff', fontSize: '1.1rem',
                                flex: 1, outline: 'none', padding: '0.8rem 0'
                            }}
                        />
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '0.5rem 1.5rem', borderRadius: '30px', border: 'none', cursor: 'pointer',
                                    background: selectedCategory === cat ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                                    color: selectedCategory === cat ? '#000' : 'var(--text-secondary)',
                                    fontWeight: '600', transition: 'all 0.3s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">

                    {/* Results Count */}
                    <div style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        Showing {filteredBlogs.length} articles
                    </div>

                    {/* Blog Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
                        {filteredBlogs.map(blog => (
                            <Link to={`/blogs/${blog.id}`} key={blog.id} style={{ textDecoration: 'none' }}>
                                <div className="card blog-card" style={{
                                    padding: 0, overflow: 'hidden', height: '100%',
                                    display: 'flex', flexDirection: 'column',
                                    border: '1px solid var(--glass-border)',
                                    transition: 'transform 0.4s, box-shadow 0.4s'
                                }}>
                                    <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute', top: '1rem', left: '1rem',
                                            background: 'rgba(0,0,0,0.7)', padding: '0.3rem 0.8rem', borderRadius: '20px',
                                            fontSize: '0.8rem', fontWeight: 'bold', color: '#fff', zIndex: 2, backdropFilter: 'blur(5px)'
                                        }}>
                                            {blog.category}
                                        </div>
                                        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="card-bg-img" />
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {blog.date}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {blog.readTime}</div>
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--text-primary)', flex: 1 }}>{blog.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{blog.excerpt}</p>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#333', overflow: 'hidden' }}>
                                                    <img src={`https://ui-avatars.com/api/?name=${blog.author}&background=random&color=fff`} alt={blog.author} style={{ width: '100%' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>{blog.author}</span>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{blog.authorRole}</span>
                                                </div>
                                            </div>
                                            <div style={{
                                                width: '35px', height: '35px', borderRadius: '50%',
                                                background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                transition: 'background 0.3s'
                                            }} className="hover-btn">
                                                <ArrowRight size={18} color="var(--accent-primary)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="card" style={{
                        marginTop: '6rem', padding: '4rem 2rem', textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(138, 43, 226, 0.1))',
                        border: '1px solid var(--accent-primary)'
                    }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Stay Ahead of the Curve</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                            Join 15,000+ tech enthusiasts. Get the latest tutorials, trends, and career tips delivered to your inbox.
                        </p>
                        <div style={{
                            maxWidth: '500px', margin: '0 auto', display: 'flex',
                            background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '50px', border: '1px solid var(--glass-border)'
                        }}>
                            <input type="email" placeholder="Enter your email" style={{ flex: 1, background: 'transparent', border: 'none', padding: '0 1.5rem', outline: 'none', color: '#fff' }} />
                            <button className="btn btn-primary" style={{ borderRadius: '40px', padding: '0.8rem 2rem' }}>Subscribe</button>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Blogs;
