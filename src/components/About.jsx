import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about-section section-container">
            {/* System Biography Hero Heading */}
            <div className="about-hero">
                <h2 className="about-title">
                    About me
                </h2>
                <p className="about-description">
                    Building intelligent software systems with modern web architectures,
                    focused on clean structures and robust backend engineering profiles.
                </p>
            </div>

            {/* Dashboard Console Layout Split */}
            <div className="about-layout-grid">

                {/* Left Column: Core Narrative & Sub-Cards */}
                <div className="about-left-column">
                    <div className="narrative-box">
                        <div className="narrative-header">
                            <span className="file-name">FILE_NAME: NARRATIVE.TXT</span>
                            <span className="system-status">SYSTEM_ONLINE</span>
                        </div>
                        <p className="narrative-text">
                            I'm <strong>Syed Gouse Jaheer</strong>, an AI & Data Science student at
                            BVCE Engineering College with a deep passion for architecture and robust
                            backend engineering. I build systems that are clean, stable, and highly
                            performant. My workflow centers on translating complex data structures into seamless application services.
                        </p>
                        <div className="about-tagline-glow">
                            building intelligent software with <span>java</span> & modern web technologies.
                        </div>
                    </div>

                    {/* Sub-Cards Stack */}
                    <div className="sub-cards-stack">
                        <div className="about-sub-card">
                            <div className="sub-card-icon-box">⚡</div>
                            <div className="sub-card-info">
                                <h3>backend expertise</h3>
                                <p>solid technical foundation building secure production environments using <strong>java, spring boot, rest apis, and mysql</strong> databases.</p>
                            </div>
                        </div>

                        <div className="about-sub-card">
                            <div className="sub-card-icon-box">🚀</div>
                            <div className="sub-card-info">
                                <h3>key projects</h3>
                                <p>developed an architectural <strong>offline upi payment system</strong> utilizing advanced spring boot systems to secure offline financial capabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: 2x2 Metrics Grid & Ambient Badges Console */}
                <div className="about-right-column">
                    <div className="metrics-layout-grid">

                        {/* Metric 01 */}
                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">🎓</div>
                                <span className="metric-sys-tag">METRIC_01</span>
                            </div>
                            <div className="metric-huge-display">DATA SCIENCE</div>
                            <div className="metric-caption-label">Specialization</div>
                        </div>

                        {/* Metric 02 */}
                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">📈</div>
                                <span className="metric-sys-tag">METRIC_02</span>
                            </div>
                            <div className="metric-huge-display">4+</div>
                            <div className="metric-caption-label">Hands-on Projects</div>
                        </div>

                        {/* Metric 03 */}
                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">🏛️</div>
                                <span className="metric-sys-tag">METRIC_03</span>
                            </div>
                            <div className="metric-huge-display">Multiple</div>
                            <div className="metric-caption-label">Hackathons Attended</div>
                        </div>

                        {/* Metric 04 */}
                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">💼</div>
                                <span className="metric-sys-tag">METRIC_04</span>
                            </div>
                            <div className="metric-huge-display">5</div>
                            <div className="metric-caption-label">Certifications Completed</div>
                        </div>

                    </div>

                    {/* Bottom Right Badges Deck */}
                    <div className="badges-console-box">
                        <div className="console-quote-text">
                            "verified secure credentials & professional platform achievements mapping"
                        </div>
                        <div className="about-badge-flex-row">
                            <span className="premium-animate-badge">Oracle Certified</span>
                            <span className="premium-animate-badge">JPMorgan Chase Eng</span>
                            <span className="premium-animate-badge">NPTEL IIT Madras</span>
                            <span className="premium-animate-badge">AWS Cloud Foundations</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;