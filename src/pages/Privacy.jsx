
import React, { useEffect } from 'react';
import { Lock, Eye, FileText, CheckCircle, ChevronRight, RefreshCw, ShieldCheck } from 'lucide-react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        { id: 'collection', title: '1. Information Collection' },
        { id: 'usage', title: '2. How We Use Data' },
        { id: 'sharing', title: '3. Data Sharing' },
        { id: 'security', title: '4. Data Security' },
        { id: 'cookies', title: '5. Cookies & Tracking' },
        { id: 'rights', title: '6. Your Rights' },
        { id: 'children', title: '7. Children\'s Privacy' },
        { id: 'contact', title: '8. Contact Us' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main>
            {/* Header */}
            <section style={{
                background: 'linear-gradient(to right, var(--bg-secondary), var(--bg-primary))',
                padding: '6rem 0 3rem',
                borderBottom: '1px solid var(--glass-border)'
            }}>
                <div className="container animate-fade-in">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.8rem', background: 'rgba(0, 255, 128, 0.1)', borderRadius: '12px' }}>
                            <Lock size={32} color="var(--accent-secondary)" />
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '3rem', margin: 0 }}>Privacy Policy</h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <RefreshCw size={16} /> Last Updated: December 9, 2025
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Sticky Sidebar */}
                    <aside style={{ flex: '0 0 280px' }}>
                        <div className="card" style={{ position: 'sticky', top: '100px', padding: '1.5rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#fff' }}>Table of Contents</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {sections.map(section => (
                                    <li key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        style={{
                                            cursor: 'pointer', color: 'var(--text-secondary)',
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            transition: 'color 0.2s', fontSize: '0.95rem'
                                        }}
                                        className="hover-action"
                                    >
                                        {section.title} <ChevronRight size={14} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                        <div id="collection" style={sectionStyle}>
                            <h2 style={headingStyle}>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.</p>
                            <div className="card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', marginTop: '1rem' }}>
                                <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Types of Data:</h4>
                                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                                    <li><strong>Personal Data:</strong> Name, email address, phone number.</li>
                                    <li><strong>Usage Data:</strong> IP address, browser type, pages visited.</li>
                                    <li><strong>Payment Data:</strong> Credit card details (processed securely by Stripe).</li>
                                </ul>
                            </div>
                        </div>

                        <div id="usage" style={sectionStyle}>
                            <h2 style={headingStyle}>2. How We Use Your Information</h2>
                            <p>We use the information we collect to operate, maintain, and improve our services.</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>To provide, maintain, and improve our Services.</li>
                                <li>To process transactions and send related information.</li>
                                <li>To send you technical notices, updates, and support messages.</li>
                                <li>To respond to your comments, questions, and requests.</li>
                            </ul>
                        </div>

                        <div id="sharing" style={sectionStyle}>
                            <h2 style={headingStyle}>3. Data Sharing</h2>
                            <p>We do not share your personal information with third parties except as described in this privacy policy. We may share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
                        </div>

                        <div id="security" style={sectionStyle}>
                            <h2 style={headingStyle}>4. Data Security</h2>
                            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. All payment data is encrypted using SSL technology.</p>
                        </div>

                        <div id="cookies" style={sectionStyle}>
                            <h2 style={headingStyle}>5. Cookies & Tracking Technologies</h2>
                            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                        </div>

                        <div id="rights" style={sectionStyle}>
                            <h2 style={headingStyle}>6. Your Data Protection Rights</h2>
                            <p>Depending on your location, you may have the following rights:</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>The right to access, update, or delete the information we have on you.</li>
                                <li>The right of rectification.</li>
                                <li>The right to object.</li>
                                <li>The right of restriction.</li>
                            </ul>
                        </div>

                        <div id="children" style={sectionStyle}>
                            <h2 style={headingStyle}>7. Children's Privacy</h2>
                            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.</p>
                        </div>

                        <div id="contact" style={sectionStyle}>
                            <h2 style={headingStyle}>8. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <div className="card" style={{ marginTop: '1.5rem', padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--glass-bg)' }}>
                                <ShieldCheck size={40} color="var(--accent-secondary)" />
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Data Protection Officer</h3>
                                    <p style={{ margin: '0.5rem 0', color: 'var(--text-secondary)' }}>Capital Park, Madhapur, Telangana</p>
                                    <a href="mailto:privacy@quantumpod.com" style={{ color: 'var(--accent-secondary)', textDecoration: 'none' }}>privacy@quantumpod.com</a>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </section>
        </main>
    );
};

// Styles
const sectionStyle = {
    marginBottom: '4rem',
    scrollMarginTop: '120px'
};

const headingStyle = {
    color: '#fff',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--glass-border)',
    paddingBottom: '0.5rem'
};

export default Privacy;
