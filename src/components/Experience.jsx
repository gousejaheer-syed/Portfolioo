import React from 'react';
import './Experience.css';

const experiences = [
    {
        company: "ServiceNow",
        role: "Software Engineering Intern",
        period: "2025 - Present",
        desc: "Optimized backend pipelines and contributed to scalable infrastructure solutions."
    },
    {
        company: "Tech Corp",
        role: "Junior Developer",
        period: "2024 - 2025",
        desc: "Focused on modular architecture and database optimization using Spring Boot."
    }
];

function Experience() {
    return (
        <section id="experience" className="experience-container">
            <h2 className="section-title">// EXPERIENCE</h2>
            <div className="experience-grid">
                {experiences.map((exp, i) => (
                    <div className="exp-card" key={i}>
                        <h3>{exp.role}</h3>
                        <span className="exp-company">{exp.company} | {exp.period}</span>
                        <p>{exp.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Experience;