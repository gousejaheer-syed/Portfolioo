import React from 'react';
import './Skills.css';

const skillLevels = {
    "Java": 90, "Python": 85, "C++": 70, "JavaScript": 88,
    "Spring Boot": 82, "REST APIs": 85, "Servlets": 75,
    "React": 90, "HTML": 95, "CSS": 92,
    "MySQL": 85, "SQL": 88, "DBMS Systems": 80,
    "Git": 90, "GitHub": 90, "VS Code": 92, "AI Tools": 85, "Postman": 80,
    "Oracle Cloud (OCI)": 70, "AWS": 65, "Docker": 72,
    "OOPs": 88, "DSA": 82, "Computer Networks": 75,
    "Linux": 80, "Windows": 90, "macOS": 85,
    "Time Management": 90, "Communication": 88, "Problem Solving": 90
};

function Skills() {
    const skillCategories = [
        {
            category: "Languages", icon: "💻",
            items: [
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ]
        },
        {
            category: "Frameworks & Core", icon: "⚙️",
            items: [
                { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "REST APIs", logo: "https://img.icons8.com/ios-filled/50/ffffff/api.png" },
                { name: "Servlets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg" }
            ]
        },
        {
            category: "Frontend Dev", icon: "🎨",
            items: [
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
            ]
        },
        {
            category: "Database Engines", icon: "🗄️",
            items: [
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                { name: "DBMS Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
            ]
        },
        {
            category: "Tools & Workflow", icon: "🛠️",
            items: [
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "AI Tools", logo: "https://img.icons8.com/color/96/artificial-intelligence.png" },
                { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
            ]
        },
        {
            category: "Cloud Environments", icon: "☁️",
            items: [
                { name: "Oracle Cloud (OCI)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
            ]
        },
        {
            category: "Core Concepts", icon: "🧠",
            items: [
                { name: "OOPs", logo: "https://img.icons8.com/fluency/48/source-code.png" },
                { name: "DSA", logo: "https://img.icons8.com/fluency/48/tree-structure.png" },
                { name: "Computer Networks", logo: "https://img.icons8.com/fluency/48/network-card.png" }
            ]
        },
        {
            category: "Operating Systems", icon: "🖥️",
            items: [
                { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
                { name: "macOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" }
            ]
        },
        {
            category: "Soft Skills", icon: "🤝",
            items: [
                { name: "Time Management", logo: "https://img.icons8.com/fluency/48/clock.png" },
                { name: "Communication", logo: "https://img.icons8.com/fluency/48/chat.png" },
                { name: "Problem Solving", logo: "https://img.icons8.com/fluency/48/puzzle.png" }
            ]
        }
    ];

    React.useEffect(() => {
        const cards = document.querySelectorAll('.skills-card');
        const animate = (card) => {
            card.querySelectorAll('.pill-pct').forEach((el) => {
                const target = parseInt(el.dataset.target, 10);
                let start = null;
                const step = (ts) => {
                    if (!start) start = ts;
                    const p = Math.min((ts - start) / 1000, 1);
                    el.textContent = `${Math.round(p * target)}%`;
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            });
        };

        const reset = (card) => {
            card.querySelectorAll('.pill-pct').forEach((el) => {
                el.textContent = '0%';
            });
        };

        const enterHandlers = new Map();
        const leaveHandlers = new Map();

        cards.forEach((card) => {
            const onEnter = () => {
                // Trigger bar fill via CSS transition
                card.querySelectorAll('.pill-fill').forEach(f => f.style.width = f.style.getPropertyValue('--target'));
                animate(card);
            };
            const onLeave = () => {
                card.querySelectorAll('.pill-fill').forEach(f => f.style.width = '0%');
                reset(card);
            };
            enterHandlers.set(card, onEnter);
            leaveHandlers.set(card, onLeave);
            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
        });

        return () => {
            cards.forEach((card) => {
                card.removeEventListener('mouseenter', enterHandlers.get(card));
                card.removeEventListener('mouseleave', leaveHandlers.get(card));
            });
        };
    }, []);

    return (
        <div className="skills-container">
            <div className="skills-wrapper">
                <div className="skills-hero">
                    <h1 className="skills-title">Technical Expertise</h1>
                    <p className="skills-description">A comprehensive breakdown of my engineering capabilities.</p>
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
                                        <div
                                            className="pill-fill"
                                            style={{ '--target': `${skillLevels[item.name] || 75}%` }}
                                        ></div>
                                        <img src={item.logo} alt={item.name} className="pill-logo" />
                                        {item.name}
                                        <span
                                            className="pill-pct"
                                            data-target={skillLevels[item.name] || 75}
                                        >0%</span>
                                    </span>
                                ))}
                            </div>
                            <div className="accent-bar"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;