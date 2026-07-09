import React from 'react';
import './Projects.css';

const projects = [
    { title: "Offline UPI System", tech: ["Java", "Spring Boot", "MySQL"], description: "..." },
    { title: "Portfolio v1", tech: ["React", "CSS"], description: "..." }
];

function Projects() {
    // THIS RETURN IS CORRECT: It returns a single <section>
    return (
        <section id="projects" className="projects-container">
            <h2 className="section-title">// KEY PROJECTS</h2>
            <div className="projects-grid">
                {projects.map((proj, i) => (
                    <div className="proj-card" key={i}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;