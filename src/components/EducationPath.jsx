import React, { useEffect, useRef } from 'react';
import './EducationPath.css';

const milestones = [
    { id: 1, title: "Sarada Convent EM High School", year: "2007-2020", desc: "SSC – GPA: 9.7", x: 80, y: 5 },
    { id: 2, title: "Kakinada Institute of Engineering and Technology", year: "2020-2024", desc: "Diploma in CS – 70.15%", x: 10, y: 30 },
    { id: 3, title: "Bonam Venkata Chalamayya Engineering College", year: "2024-2027", desc: "B.Tech (AI/DS) – CGPA: 8.13", x: 80, y: 60 },
    { id: 4, title: "Professional Deployment", year: "2027+", desc: "Software Engineering Career", x: 10, y: 85 },
];

const HIT_TIMES = [300, 1300, 2400, 3500];

const EducationPath = () => {
    const wrapRef = useRef(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    wrap.classList.add('play');
                    const nodes = wrap.querySelectorAll('.path-node');
                    nodes.forEach((node, i) => {
                        setTimeout(() => node.classList.add('hit'), HIT_TIMES[i]);
                    });
                    observer.unobserve(wrap);
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(wrap);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="path-wrap" ref={wrapRef}>
            <svg className="path-svg" viewBox="0 0 380 460" preserveAspectRatio="none">
                <path
                    className="path-line"
                    d="M 300,35 C 300,90 90,95 90,150
                       C 90,205 300,215 300,270
                       C 300,325 90,335 90,390"
                />
            </svg>

            {milestones.map((item) => {
                // text always pulls inward toward center, away from whichever edge the dot is near
                const textSide = item.x >= 50 ? 'left' : 'right';
                return (
                    <div
                        key={item.id}
                        className={`path-node path-node--${textSide}`}
                        style={{ left: `${item.x}%`, top: `${item.y}%` }}
                    >
                        <span className="path-dot-marker" />
                        <div className="path-text">
                            <span className="path-year">{item.year}</span>
                            <h4 className="path-title">{item.title}</h4>
                            <p className="path-desc">{item.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EducationPath;



