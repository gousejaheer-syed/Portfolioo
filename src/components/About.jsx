import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                {/* About Hero */}
                <div className="about-hero">
                    <h1 className="about-title">
                        About Me
                    </h1>

                    <p className="about-description">
                        I'm <strong>Syed Gouse Jaheer</strong>, an AI & Data Science student at
                        BVCE Engineering College with a deep passion for architecture and robust
                        backend engineering. I build systems that are clean, stable, and highly
                        performant.
                    </p>

                    <p className="about-tagline">
                        Building Intelligent Software with
                        <span> Java</span> & Modern Web Technologies.
                    </p>
                </div>


                {/* Dense Grid Matrix Container Layout */}
                <div className="about-grid">

                    {/* Card 1: Core Expertise */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">⚡</div>
                        <h3>Backend Expertise</h3>
                        <p>Solid technical foundation building secure production environments using <strong>Java, Spring Boot, REST APIs, and MySQL databases</strong>.</p>
                    </div>

                    {/* Card 2: Featured Project */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">🚀</div>
                        <h3>Key Projects</h3>
                        <p>Developed an architectural <strong>Offline UPI Payment System</strong> utilizing advanced Spring Boot architectures to secure transaction capabilities without internet access.</p>
                    </div>

                    {/* Card 3: Experience & Training */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">💼</div>
                        <h3>Industry Exposure</h3>
                        <p>Completed hands-on software training and internship tracking pipelines with industry giants like <strong>ServiceNow</strong>.</p>
                    </div>

                    {/* Card 4: Academic Foundation */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">🎓</div>
                        <h3>Education & Metrics</h3>
                        <p>Pursuing AI & Data Science at BVCE. Holds a foundational engineering Diploma from KIET and achieved a stellar <strong>9.7 GPA</strong> in SSC.</p>
                    </div>

                </div>

                {/* Credentials & Badges Section with Luxury Ambient Breathing Animation */}
                <div className="about-badges-section">
                    <h4>Verified Credentials & Badges</h4>
                    <div className="badge-row">
                        <span className="premium-animate-badge">Oracle Certified</span>
                        <span className="premium-animate-badge">JPMorgan Chase Eng</span>
                        <span className="premium-animate-badge">NPTEL IIT Madras</span>
                        <span className="premium-animate-badge">AWS Cloud Foundations</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;