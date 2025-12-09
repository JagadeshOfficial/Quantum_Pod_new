
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Tag } from 'lucide-react';

const BlogDetails = () => {
    const { blogId } = useParams();
    const blog = siteContent.blogs.find(b => b.id === parseInt(blogId));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blogId]);

    if (!blog) return <div className="container" style={{ padding: '5rem', textAlign: 'center' }}><h2>Blog not found</h2></div>;

    const relatedBlogs = siteContent.blogs.filter(b => b.id !== blog.id).slice(0, 2);

    return (
        <main>
            {/* Hero Image */}
            <div style={{
                height: '60vh',
                position: 'relative',
                overflow: 'hidden',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent)'
            }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary), transparent 80%)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', marginTop: '-150px', zIndex: 10 }}>
                {/* Back Link */}
                <Link to="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', textDecoration: 'none', background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '30px', backdropFilter: 'blur(5px)' }}>
                    <ArrowLeft size={20} /> Back to Blogs
                </Link>

                {/* Main Content Card */}
                <article className="card" style={{ padding: '0', overflow: 'hidden' }}>

                    {/* Header */}
                    <div style={{ padding: '3rem 3rem 1rem 3rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            <span style={{ padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'rgba(0, 212, 255, 0.15)', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                                {blog.category}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Clock size={16} /> {blog.readTime}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Calendar size={16} /> {blog.date}
                            </span>
                        </div>

                        <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '2rem' }}>{blog.title}</h1>

                        {/* Author Info */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#333', overflow: 'hidden' }}>
                                    <img src={`https://ui-avatars.com/api/?name=${blog.author}&background=0D8ABC&color=fff`} alt={blog.author} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{blog.author}</h4>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{blog.authorRole}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button className="btn-icon" style={socialBtnStyle}><Share2 size={18} /></button>
                                <button className="btn-icon" style={socialBtnStyle}><Linkedin size={18} /></button>
                                <button className="btn-icon" style={socialBtnStyle}><Twitter size={18} /></button>
                                <button className="btn-icon" style={socialBtnStyle}><Facebook size={18} /></button>
                            </div>
                        </div>
                    </div>

                    {/* Blog Body */}
                    <div style={{ padding: '3rem', fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                        {/* Tags */}
                        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                            <h5 style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Tag size={18} /> Related Tags
                            </h5>
                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                {blog.tags.map(tag => (
                                    <span key={tag} style={{ padding: '0.4rem 1rem', background: 'var(--bg-secondary)', borderRadius: '20px', fontSize: '0.9rem', cursor: 'pointer', transition: 'background 0.3s' }} className="hover-accent">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </article>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                    <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>You Might Also Like</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {relatedBlogs.map(b => (
                                <Link to={`/blogs/${b.id}`} key={b.id} style={{ textDecoration: 'none' }}>
                                    <div className="card" style={{ padding: '0', overflow: 'hidden', height: '100%', transition: 'transform 0.3s' }}>
                                        <div style={{ height: '200px', overflow: 'hidden' }}>
                                            <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '1.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{b.category}</span>
                                            <h4 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: 'var(--text-primary)' }}>{b.title}</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Read more <ArrowRight size={14} style={{ verticalAlign: 'middle' }} /></p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

// Styles
const socialBtnStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s'
};

export default BlogDetails;
