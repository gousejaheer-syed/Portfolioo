import "./Experience.css";

// Add new roles here — most recent first. Replace an empty slot with a real entry.
// TOTAL_SLOTS controls how many timeline items render (filled + empty).
const TOTAL_SLOTS = 3;

const experience = [
    {
        role: "Software Training & Internship Pipeline",
        company: "ServiceNow",
        period: "2025",
        description:
            "Completed hands-on software training and internship tracking pipelines with industry-standard tools and processes.",
        tags: ["Java", "REST APIs"],
    },
    // {
    //   role: "Job Title",
    //   company: "Company Name",
    //   period: "2026",
    //   description: "One or two sentences on scope and impact.",
    //   tags: ["Spring Boot", "AWS"],
    // },
];

const slots = [
    ...experience,
    ...Array.from({ length: Math.max(0, TOTAL_SLOTS - experience.length) }, () => null),
];

export default function Experience() {
    return (
        <div className="experience-section">

            <div className="experience-hero">

                <h1 className="experience-label">
                    Experience
                </h1>

                <p className="experience-description">
                    My professional journey through internships, software training,
                    and hands-on experience building real-world backend applications
                    and scalable solutions.
                </p>

            </div>

            <div className="timeline">
                {slots.map((item, i) =>
                    item ? (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-marker">
                                <span className="timeline-dot"></span>
                                {i !== slots.length - 1 && <span className="timeline-line"></span>}
                            </div>

                            <div className="timeline-content">
                                <span className="timeline-period">{item.period}</span>
                                <h3 className="timeline-role">{item.role}</h3>
                                <p className="timeline-company">{item.company}</p>
                                <p className="timeline-description">{item.description}</p>

                                <div className="timeline-tags">
                                    {item.tags.map((tag, j) => (
                                        <span className="timeline-tag" key={j}>
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="timeline-item timeline-item-empty" key={i}>
                            <div className="timeline-marker">
                                <span className="timeline-dot timeline-dot-empty"></span>
                                {i !== slots.length - 1 && <span className="timeline-line"></span>}
                            </div>

                            <div className="timeline-content">
                                <p className="timeline-empty-text">Role coming soon</p>
                            </div>
                        </div>
                    )
                )}
            </div>

        </div>
    );}