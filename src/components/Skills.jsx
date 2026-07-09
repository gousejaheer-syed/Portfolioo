import React from 'react';
import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            category: "Languages",
            icon: "💻",
            items: [
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ]
        },
        {
            category: "Frameworks & Core",
            icon: "⚙️",
            items: [
                { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "REST APIs", logo: "https://img.icons8.com/ios-filled/50/ffffff/api.png" },
                { name: "Servlets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg" }
            ]
        },
        {
            category: "Frontend Dev",
            icon: "🎨",
            items: [
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
            ]
        },
        {
            category: "Database Engines",
            icon: "🗄️",
            items: [
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                { name: "DBMS Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
            ]
        },
        {
            category: "Tools & Workflow",
            icon: "🛠️",
            items: [
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "AI Tools", logo: "https://img.icons8.com/color/96/artificial-intelligence.png" },
                { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
            ]
        },
        {
            category: "Cloud Environments",
            icon: "☁️",
            items: [
                { name: "Oracle Cloud (OCI)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
            ]
        },
        {
            category: "Core Concepts",
            icon: "🧠",
            items: [
                { name: "OOPs", logo: "https://img.icons8.com/fluency/48/source-code.png" },
                { name: "DSA", logo: "https://img.icons8.com/fluency/48/tree-structure.png" },
                { name: "Computer Networks", logo: "https://img.icons8.com/fluency/48/network-card.png" }
            ]
        },
        {
            category: "Operating Systems",
            icon: "🖥️",
            items: [
                { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
                { name: "macOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" }
            ]
        },
        {
            category: "Soft Skills",
            icon: "🤝",
            items: [
                { name: "Time Management", logo: "https://img.icons8.com/fluency/48/clock.png" },
                { name: "Communication", logo: "https://img.icons8.com/fluency/48/chat.png" },
                { name: "Problem Solving", logo: "https://img.icons8.com/fluency/48/puzzle.png" }
            ]
        }
    ];

    return (
        <div className="skills-container">
            <div className="skills-wrapper">

                <div className="skills-header">
                    <span className="skills-eyebrow">// Core Competencies</span>
                    <h2 className="skills-title">Technical Expertise</h2>
                    {/* Applied the skills-lead class for the monospaced font effect */}
                    <p className="skills-lead">
                        A comprehensive breakdown of my backend engineering framework stack, architectural capabilities, and environments.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, index) => (
                        <div className="skills-card" key={index}>
                            <div className="card-top-row">
                                <div className="skill-logo-box">
                                    <span className="skill-icon-glyph">{cat.icon}</span>
                                </div>
                                <h3>{cat.category}</h3>
                            </div>

                            <div className="skill-pills-container">
                                {cat.items.map((item, itemIdx) => (
                                    <span className="skill-pill" key={itemIdx}>
                                        <img src={item.logo} alt={`${item.name} logo`} className="pill-logo" />
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Skills;