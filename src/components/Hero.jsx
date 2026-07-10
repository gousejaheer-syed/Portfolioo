import React from 'react';
import './Hero.css';
import profileImage from '../assets/profile.jpg';

function Hero() {
    const handleDownloadCV = () => {
        // Because it is in 'public', you use the forward slash '/'
        const audio = new Audio('/sound.mp3');
        audio.play().catch(error => {
            console.error("Audio failed to play:", error);
        });
    };
    return (
        <section className="hero">
            <div className="hero-container">

                {/* Left Content Column */}
                <div className="hero-content">
                    <div className="hero-tag">
                        <span className="geo-icon">📍</span> ABOUT ME
                    </div>

                    <h1 className="hero-title">
                        Hey, I'm <br />
                        <span className="name-highlight">Jaheer!</span>
                    </h1>
                    <h2 className="hero-subtitle">Java Backend Developer</h2>

                    <p className="hero-desc">
                        - Backend is where I live — Java, Spring Boot, MySQL, and REST APIs are my
                        foundation. I don't just write code; I build systems that are clean,
                        scalable, and work in production. Currently building an offline UPI
                        payment system and expanding into microservices, cloud deployment (AWS),
                        and distributed backend systems.
                    </p>

                    <p className="hero-subtext">
                        //If you need someone who can ship reliable backend services,
                        design clean APIs, and learn fast — that's my lane.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                            VIEW MY WORK <span className="arrow">↓</span>
                        </a>

                        {/* 2. Added the onClick handler here */}
                        <a
                            href="/your-cv.pdf"
                            download="Jaheer_CV.pdf"
                            className="btn-secondary"
                            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                            onClick={handleDownloadCV}
                        >
                            DOWNLOAD CV
                        </a>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="hero-image-wrapper">
                    <div className="image-glow-effect"></div>
                    <img
                        src={profileImage}
                        alt="Jaheer - Java Backend Developer"
                        className="hero-profile-img"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;