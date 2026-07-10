import React from 'react';
import "./Projects.css";

export default function Projects() {
    return (
        <section className="featured-project-section">

            {/* Hero Heading */}
            <div className="projects-hero">
                <h2 className="projects-title">
                    Featured Projects
                </h2>

                <p className="projects-description">
                    A collection of web applications, backend systems, and digital
                    experiences built using modern technologies, scalable architecture,
                    and clean engineering practices.
                </p>

            </div>
            <div className="project-card-container">

                {/* LEFT COLUMN: Inner Website Mockup Window */}
                <div className="project-media-pane">
                    <div className="media-header">
                        <span className="media-logo">S.F. VENTURES</span>
                        <nav className="media-nav">
                            <span>Home</span>
                            <span>About</span>
                            <span>Resources</span>
                            <span>Blog</span>
                        </nav>
                    </div>

                    <div className="media-body">
                        <h2 className="media-hero-title">
                            TAKE YOUR <br />
                            <span className="highlight-yellow">BUSINESS</span> <br />
                            TO NEW HEIGHTS
                        </h2>

                        <p className="media-hero-subtitle">
                            S.F. Ventures provides innovative business solutions that change the way you see and do your business.
                        </p>

                        <div className="media-btn-group">
                            <button className="btn-yellow">GET STARTED</button>
                            <button className="btn-outline">LEARN MORE</button>
                        </div>
                    </div>

                    <div className="media-socials">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="project-info-pane">

                    <div className="bg-project-number">01</div>

                    <div className="info-top">
                        <div className="project-date-tag">
                            <i className="far fa-calendar"></i> 2021
                        </div>

                        <h1 className="project-main-title">
                            S.F. <span className="text-gradient">Ventures</span>
                        </h1>

                        <p className="project-tagline">
                            Take your business to new heights
                        </p>

                        <p className="project-description">
                            S.F. Ventures delivers modern business solutions designed to help companies grow with confidence.
                        </p>
                    </div>

                    <div className="info-bottom">
                        <div className="tech-tags">
                            <span className="tag">WEB DESIGN</span>
                            <span className="tag">CONTENT MANAGEMENT (CMS)</span>
                        </div>

                        <button className="btn-explore">
                            EXPLORE <span className="arrow">→</span>
                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
}