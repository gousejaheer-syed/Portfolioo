import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

// Wraps an icon link
function MagneticIcon({ href, children }) {
    const ref = useRef(null);
    const [transform, setTransform] = useState('translate(0px, 0px) scale(1)');
    const [isHovered, setIsHovered] = useState(false);

    const MAX_PULL = 6;

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
            <span className="social-icon-glyph">{children}</span>
        </a>
    );
}

function Navbar() {
    const [activeItem, setActiveItem] = useState('home');
    const navSections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveItem(entry.target.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
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
                <div className="navbar-brand">
                    <span className="brand-text">PORTFOLIO</span>
                </div>

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

                {/* Social Icons + Liquid Effect Container */}
                <div className="navbar-actions" style={{ position: 'relative' }}>

                    {/* SVG Filter for the Liquid Effect */}
                    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                        <defs>
                            <filter id="navbar-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Droplet Animation Layer */}
                    <div className="navbar-liquid-container">
                        <div className="liquid-droplet liquid-droplet-1"></div>
                        <div className="liquid-droplet liquid-droplet-2"></div>
                    </div>

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