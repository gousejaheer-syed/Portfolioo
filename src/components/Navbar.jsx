import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure you've run: npm install react-icons
import './Navbar.css';

// Wraps an icon link: subtle magnetic cursor-follow + soft glow — restrained, premium feel
function MagneticIcon({ href, children }) {
    const ref = useRef(null);
    const [transform, setTransform] = useState('translate(0px, 0px) scale(1)');
    const [isHovered, setIsHovered] = useState(false);

    const MAX_PULL = 6; // px — keeps the motion tight and controlled, not flying around

    const handleMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);

        const strength = 0.25;
        const pullX = Math.max(-MAX_PULL, Math.min(MAX_PULL, relX * strength));
        const pullY = Math.max(-MAX_PULL, Math.min(MAX_PULL, relY * strength));

        setTransform(`translate(${pullX}px, ${pullY}px) scale(1.08)`);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTransform('translate(0px, 0px) scale(1)');
    };

    return (
        <a
            ref={ref}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`social-icon ${isHovered ? 'is-hovered' : ''}`}
            style={{ transform }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <span className="social-icon-glow" />
            <span className="social-icon-glyph">{children}</span>
        </a>
    );
}

function Navbar() {
    const [activeItem, setActiveItem] = useState('home');
    // In Navbar.jsx, ensure this is exactly as shown:
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

                {/* Social Icons — magnetic hover + glow */}
                <div className="navbar-actions">
                    <MagneticIcon href="https://github.com/gousejaheer-syed">
                        <FaGithub />
                    </MagneticIcon>
                    <MagneticIcon href="https://www.linkedin.com/in/syed-gouse-jaheer/">
                        <FaLinkedin />
                    </MagneticIcon>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;