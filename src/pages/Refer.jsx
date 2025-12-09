
import React, { useState } from 'react';
import { Share2, Gift, DollarSign, Copy, Trophy, CheckCircle, Smartphone } from 'lucide-react';

const Refer = () => {
    const [referralCount, setReferralCount] = useState(1);
    const rewardPerReferral = 5000;

    return (
        <main>
            {/* Gamified Hero */}
            <section style={{
                padding: '8rem 0 5rem',
                background: 'linear-gradient(135deg, #1a0b2e 0%, #000 100%)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Floating Elements Background Animation (Static CSS for now) */}
                <div style={{ position: 'absolute', top: '10%', left: '10%', width: '100px', height: '100px', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', opacity: 0.2, borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '150px', height: '150px', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', opacity: 0.2, borderRadius: '50%' }}></div>

                <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.5rem 1.5rem', borderRadius: '30px', background: 'rgba(255, 215, 0, 0.15)', color: '#FFD700', border: '1px solid rgba(255, 215, 0, 0.3)', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                        <Trophy size={18} /> #1 Referral Program in EdTech
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1' }}>
                        Refer Friends. <br /> <span style={{ color: '#FFD700' }}>Earn ₹{rewardPerReferral.toLocaleString()}</span> Each.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Help your friends launch their tech careers and get rewarded with Amazon Vouchers or Cash straight to your bank account.
                    </p>

                    {/* Copy Link Box */}
                    <div style={{
                        maxWidth: '500px', margin: '0 auto', background: 'rgba(255,255,255,0.1)',
                        padding: '0.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center',
                        border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)'
                    }}>
                        <div style={{ flex: 1, textAlign: 'left', paddingLeft: '1rem', color: '#ccc', fontFamily: 'monospace' }}>quantumpod.com/ref/JAGAD123</div>
                        <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: '8px' }}>
                            <Copy size={18} /> Copy
                        </button>
                    </div>
                </div>
            </section>

            {/* Earnings Calculator */}
            <section className="section-padding">
                <div className="container">
                    <div className="card" style={{
                        background: 'linear-gradient(to right, #111, #1a1a2e)',
                        border: '1px solid var(--glass-border)', padding: '4rem', textAlign: 'center',
                        maxWidth: '800px', margin: '0 auto'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Calculate Your Earnings</h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={referralCount}
                                onChange={(e) => setReferralCount(parseInt(e.target.value))}
                                style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                <span>1 Friend</span>
                                <span>10 Friends</span>
                                <span>20 Friends</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>If you refer</p>
                                <h3 style={{ fontSize: '3rem', margin: 0, color: '#fff' }}>{referralCount} <span style={{ fontSize: '1.5rem' }}>Friends</span></h3>
                            </div>
                            <div style={{ padding: '2rem', background: 'rgba(0, 255, 128, 0.1)', borderRadius: '16px', border: '1px solid rgba(0, 255, 128, 0.3)' }}>
                                <p style={{ fontSize: '1.1rem', color: '#aaffcc', marginBottom: '0.5rem' }}>You Earn</p>
                                <h3 style={{ fontSize: '3rem', margin: 0, color: '#00ff80' }}>₹{(referralCount * rewardPerReferral).toLocaleString()}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Steps */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="hero-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>It's Simple. Really.</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        {[
                            { icon: Share2, title: "1. Share", desc: "Share your unique link via WhatsApp, LinkedIn, or Email." },
                            { icon: Smartphone, title: "2. Friend Enrolls", desc: "Your friend signs up and enrolls in a paid course." },
                            { icon: Gift, title: "3. You Get Paid", desc: "Earnings are credited to your wallet 7 days after enrollment." }
                        ].map((step, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-primary)',
                                    border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                                }}>
                                    <step.icon size={36} color="var(--accent-primary)" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leaderboard (Social Proof) */}
            <section className="section-padding">
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Top Referrers This Month</h2>
                    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                        {[
                            { name: "Rahul V.", earned: "₹45,000", rank: 1 },
                            { name: "Sneha K.", earned: "₹30,000", rank: 2 },
                            { name: "Amit B.", earned: "₹25,000", rank: 3 },
                            { name: "Priya S.", earned: "₹15,000", rank: 4 },
                        ].map((user, idx) => (
                            <div key={idx} style={{
                                display: 'flex', justifyContent: 'space-between', padding: '1.5rem 2rem',
                                borderBottom: '1px solid var(--glass-border)', alignItems: 'center',
                                background: idx < 3 ? `rgba(255, 215, 0, ${0.1 - idx * 0.03})` : 'transparent'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontWeight: 'bold', color: idx === 0 ? '#FFD700' : idx === 1 ? '#C0C0C0' : idx === 2 ? '#CD7F32' : '#fff' }}>
                                        #{user.rank}
                                    </span>
                                    <span style={{ fontSize: '1.1rem' }}>{user.name}</span>
                                </div>
                                <span style={{ color: '#00ff80', fontWeight: 'bold' }}>{user.earned}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Refer;
