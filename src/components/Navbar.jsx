import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure you've run: npm install react-icons
import './Navbar.css';

function Navbar() {
    const [activeItem, setActiveItem] = useState('home');
    const navSections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveItem(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
            }
        );

        navSections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Brand Logo */}
                <div className="navbar-brand">
                    <span className="brand-text">PORTFOLIO</span>
                </div>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    {navSections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`nav-item ${activeItem === id ? 'active' : ''}`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Icons instead of Resume button */}
                <div className="navbar-actions">
                    <a href="https://github.com/gousejaheer-syed" target="_blank" rel="noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/syed-gouse-jaheer/" target="_blank" rel="noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;