import React from 'react';
import './About.css';
import EducationPath from './EducationPath';

function About() {
    return (
        <section className="about-section section-container">
            <div className="about-hero">
                <h2 className="about-title">About me</h2>
                <p className="about-description">
                    Building intelligent software systems with modern web architectures,
                    focused on clean structures and robust backend engineering profiles.
                </p>
            </div>

            <div className="about-layout-grid">
                {/* Left Column */}
                <div className="about-left-column">
                    <div className="narrative-box">
                        <div className="narrative-header">
                            <span className="file-name">FILE_NAME: EDUCATION_PATH.LOG</span>
                            <span className="system-status">SYSTEM_ONLINE</span>
                        </div>
                        <EducationPath />
                    </div>
                </div>

                {/* Right Column (Updated to be a Flex Container) */}
                <div className="about-right-column">
                    <div className="metrics-layout-grid">
                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">🎓</div>
                                <span className="metric-sys-tag">METRIC_01</span>
                            </div>
                            <div className="metric-huge-display">DATA SCIENCE</div>
                            <div className="metric-caption-label">Specialization</div>
                        </div>

                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">📈</div>
                                <span className="metric-sys-tag">METRIC_02</span>
                            </div>
                            <div className="metric-huge-display">4+</div>
                            <div className="metric-caption-label">Hands-on Projects</div>
                        </div>

                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">🏛️</div>
                                <span className="metric-sys-tag">METRIC_03</span>
                            </div>
                            <div className="metric-huge-display">Multiple</div>
                            <div className="metric-caption-label">Hackathons Attended</div>
                        </div>

                        <div className="metric-cyber-card">
                            <div className="metric-card-top">
                                <div className="metric-icon-wrapper">💼</div>
                                <span className="metric-sys-tag">METRIC_04</span>
                            </div>
                            <div className="metric-huge-display">5</div>
                            <div className="metric-caption-label">Certifications Completed</div>
                        </div>
                    </div>

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