import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

// --- Magnetic Icon Component ---
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

    const handleTouch = () => {
        setIsHovered(!isHovered);
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
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleTouch}
        >
            <span className="social-icon-glyph">{children}</span>
        </a>
    );
}

// --- Main Navbar Component ---
function Navbar() {
    const [activeItem, setActiveItem] = useState('home');
    const navSections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];

    // Refs for pill animation
    const navListRef = useRef(null);
    const linkRefs = useRef({});
    const pillRef = useRef(null);
    const prevPos = useRef(null);

    // Track active section via scrolling
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

    // Liquid pill movement logic
    const movePill = useCallback((instant = false) => {
        const pill = pillRef.current;
        const list = navListRef.current;
        const target = linkRefs.current[activeItem];
        if (!pill || !list || !target) return;

        const listRect = list.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const endLeft = targetRect.left - listRect.left;
        const endWidth = targetRect.width;

        if (instant || !prevPos.current) {
            pill.style.transition = 'none';
            pill.style.left = `${endLeft}px`;
            pill.style.width = `${endWidth}px`;
            pill.style.transform = 'scaleY(1)';
            void pill.offsetWidth;
            pill.style.transition = '';
            prevPos.current = { left: endLeft, width: endWidth };
            return;
        }

        const startLeft = prevPos.current.left;
        const startWidth = prevPos.current.width;
        const travelDist = Math.abs(endLeft - startLeft);
        const stretch = Math.min(travelDist * 0.35, 40);

        const midLeft = Math.min(startLeft, endLeft);
        const midWidth = Math.max(startWidth, endWidth) + travelDist * 0.5 + stretch;

        pill.style.left = `${midLeft}px`;
        pill.style.width = `${midWidth}px`;
        pill.style.transform = 'scaleY(0.82)';

        window.setTimeout(() => {
            pill.style.left = `${endLeft}px`;
            pill.style.width = `${endWidth}px`;
            pill.style.transform = 'scaleY(1)';
            prevPos.current = { left: endLeft, width: endWidth };
        }, 190);
    }, [activeItem]);

    // Update pill on section change
    useEffect(() => {
        movePill(prevPos.current === null);
    }, [activeItem, movePill]);

    // Update pill on window resize
    useEffect(() => {
        const onResize = () => movePill(true);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [movePill]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="brand-text">PORTFOLIO</span>
                </div>

                <ul className="navbar-links" ref={navListRef}>
                    <div className="nav-pill" ref={pillRef} />
                    {navSections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                ref={(el) => { linkRefs.current[id] = el; }}
                                className={`nav-item ${activeItem === id ? 'active' : ''}`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    {/* SVG Gooey Filter */}
                    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                        <defs>
                            <filter id="navbar-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            </filter>
                        </defs>
                    </svg>

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