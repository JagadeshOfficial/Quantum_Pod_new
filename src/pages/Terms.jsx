
import React, { useEffect } from 'react';
import { FileText, Shield, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        { id: 'introduction', title: '1. Introduction' },
        { id: 'acceptance', title: '2. Acceptance of Terms' },
        { id: 'eligibility', title: '3. Eligibility & Account' },
        { id: 'intellectual', title: '4. Intellectual Property' },
        { id: 'payments', title: '5. Payments & Refunds' },
        { id: 'conduct', title: '6. User Conduct' },
        { id: 'liability', title: '7. Limitation of Liability' },
        { id: 'changes', title: '8. Changes to Terms' }
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
                        <div style={{ padding: '0.8rem', background: 'rgba(10, 132, 255, 0.1)', borderRadius: '12px' }}>
                            <FileText size={32} color="var(--accent-primary)" />
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '3rem', margin: 0 }}>Terms & Conditions</h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <RefreshCw size={16} /> Last Updated: December 9, 2025
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Sticky Sidebar (Desktop mostly) */}
                    <aside style={{ flex: '0 0 280px' }}>
                        <div className="card" style={{ position: 'sticky', top: '100px', padding: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Table of Contents</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {sections.map(section => (
                                    <li key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        style={{
                                            cursor: 'pointer', color: 'var(--text-secondary)',
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            transition: 'color 0.2s', fontSize: '0.95rem'
                                        }}
                                        className="hover-accent"
                                    >
                                        {section.title} <ChevronRight size={14} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                        <div id="introduction" style={sectionStyle}>
                            <h2 style={headingStyle}>1. Introduction</h2>
                            <p>Welcome to Quantum Pod Technologies ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website located at quantumpod.com (together or individually "Service") operated by Quantum Pod Technologies.</p>
                            <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
                        </div>

                        <div id="acceptance" style={sectionStyle}>
                            <h2 style={headingStyle}>2. Acceptance of Terms</h2>
                            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
                        </div>

                        <div id="eligibility" style={sectionStyle}>
                            <h2 style={headingStyle}>3. Eligibility & Account</h2>
                            <p>When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>You must be at least 18 years of age to use the Service.</li>
                                <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                            </ul>
                        </div>

                        <div id="intellectual" style={sectionStyle}>
                            <h2 style={headingStyle}>4. Intellectual Property</h2>
                            <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Quantum Pod Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>
                        </div>

                        <div id="payments" style={sectionStyle}>
                            <h2 style={headingStyle}>5. Payments & Refunds</h2>
                            <p><strong>Fees:</strong> We offer various paid educational courses. Fees for these courses are billed in advance.</p>
                            <p><strong>Refunds:</strong> We offer a 7-day money-back guarantee for all our live cohort-based courses. If you are not satisfied, you can request a refund within 7 days of the batch start date. No refunds will be processed after this period.</p>
                        </div>

                        <div id="conduct" style={sectionStyle}>
                            <h2 style={headingStyle}>6. User Conduct</h2>
                            <p>You agree not to use the Service:</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>In any way that violates any applicable national or international law or regulation.</li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                            </ul>
                        </div>

                        <div id="liability" style={sectionStyle}>
                            <h2 style={headingStyle}>7. Limitation of Liability</h2>
                            <p>In no event shall Quantum Pod Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
                        </div>

                        <div id="changes" style={sectionStyle}>
                            <h2 style={headingStyle}>8. Changes to Terms</h2>
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                        </div>

                        <div className="card" style={{ marginTop: '4rem', padding: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255, 165, 0, 0.1)', border: '1px solid orange' }}>
                            <AlertCircle size={32} color="orange" />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', margin: 0 }}>Questions?</h4>
                                <p style={{ margin: '0.5rem 0 0', fontSize: '0.95rem' }}>If you have any questions about these Terms, please contact us at legal@quantumpod.com.</p>
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
    marginBottom: '3.5rem',
    scrollMarginTop: '120px' // Offset for sticky header if needed
};

const headingStyle = {
    color: 'var(--accent-primary)',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--glass-border)',
    paddingBottom: '0.5rem'
};

export default Terms;
