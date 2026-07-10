import React from 'react';
import './Contact.css';

function Contact() {
    const links = [
        {
            label: "PHONE",
            value: "+91 9989845378",
            href: "tel:+919989845378",
            icon: (
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <rect width="24" height="24" rx="5.5" fill="#34A853" />
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#ffffff" />
                </svg>
            ),
            type: "phone"
        },
        {
            label: "EMAIL",
            value: "sgousejaheer@gmail.com",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=sgousejaheer@gmail.com",
            icon: (
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <rect width="24" height="24" rx="5.5" fill="#f2f2f2" />
                    <path d="M20 5.5H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2z" fill="#EA4335"/>
                    <path d="M22 7.5c0-.17-.03-.33-.08-.49L12 14.5 2.08 7.01C2.03 7.17 2 7.33 2 7.5v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9z" fill="#FBBC05"/>
                    <path d="M20 5.5H4c-1.1 0-2 .9-2 2v.5l10 7.5 10-7.5v-.5c0-1.1-.9-2-2-2z" fill="#4285F4"/>
                    <path d="M2 8l10 7.5L22 8v.5L12 16 2 8.5V8z" fill="#34A853"/>
                </svg>
            ),
            type: "email"
        },
        {
            label: "GITHUB",
            value: "@gousejaheer-syed",
            href: "https://github.com/gousejaheer-syed",
            icon: (
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <rect width="24" height="24" rx="5.5" fill="#24292e" />
                    <path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 3.31 2.15 6.12 5.13 7.11.38.07.51-.16.51-.36 0-.18-.01-.65-.01-1.28-2.09.45-2.53-.1-2.53-.1-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.75.05 1.15.77 1.15.77.67 1.15 1.76.82 2.19.63.07-.49.26-.82.48-1.01-1.67-.19-3.42-.83-3.42-3.71 0-.82.29-1.49.78-2.01-.08-.19-.34-.95.07-1.98 0 0 .63-.2 2.07.77a7.17 7.17 0 013.88 0c1.44-.97 2.07-.77 2.07-.77.41 1.03.15 1.79.07 1.98.49.52.78 1.19.78 2.01 0 2.89-1.76 3.52-3.43 3.71.27.23.51.69.51 1.39 0 1-.01 1.81-.01 2.06 0 .2.13.44.52.36C17.35 18.12 19.5 15.31 19.5 12c0-4.14-3.36-7.5-7.5-7.5z" fill="#ffffff" />
                </svg>
            ),
            type: "github"
        },
        {
            label: "LINKEDIN",
            value: "Syed Gouse Jaheer",
            href: "https://www.linkedin.com/in/syed-gouse-jaheer/",
            icon: (
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <rect width="24" height="24" rx="5.5" fill="#0A66C2" />
                    <path d="M6.5 18.5h-3v-10h3v11zM5 7.25c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.25h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.765c1.396-2.586 7-2.777 7 2.476v5.759z" fill="#ffffff" />
                </svg>
            ),
            type: "linkedin"
        },
        {
            label: "LOCATION",
            value: "Hyderabad, India",
            href: "https://maps.apple.com/?q=Hyderabad,+India",
            icon: (
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <defs>
                        <clipPath id="apple-maps-clip">
                            <rect width="24" height="24" rx="5.5" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#apple-maps-clip)">
                        <rect width="24" height="24" fill="#EAE6DF" />
                        <path d="M0 0l24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="2.5" />
                        <path d="M0 8h24M0 16h24M8 0v24M16 0v24" stroke="#FFFFFF" strokeWidth="1.5" />
                        <path d="M-2 6c4 0 6 4 12 4s8-5 14-5" fill="none" stroke="#FCD863" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M4-2v28" fill="none" stroke="#FCD863" strokeWidth="1.8" />
                        <path d="M20-2v28" fill="none" stroke="#FCD863" strokeWidth="1.8" />
                        <path d="M4 18c4 0 5-3 10-3s3 5 6 5" fill="none" stroke="#469BF5" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11.5 5.5h5c.8 0 1.5.7 1.5 1.5v2.5c0 1.5-1.5 3-4 4.5-2.5-1.5-4-3-4-4.5V7c0-.8.7-1.5 1.5-1.5z" fill="#1D62C4" />
                        <path d="M12.3 6h3.4c.5 0 .8.3.8.8v1.8c0 .8-.5 1.5-1.3 2-.7.4-1.2.5-1.2.5s-.5-.1-1.2-.5c-.8-.5-1.3-1.2-1.3-2V6.8c0-.5.3-.8.8-.8z" fill="#FFFFFF" />
                        <text x="14" y="9.2" fontSize="3.1" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI'" fontWeight="900" fill="#1D62C4" textAnchor="middle" letterSpacing="-0.2">280</text>
                        <circle cx="4" cy="18" r="1.8" fill="#FFFFFF" />
                        <circle cx="4" cy="18" r="1.1" fill="#FF3B30" />
                    </g>
                </svg>
            ),
            type: "location"
        }
    ];

    return (
        <section id="contact" className="bg-premium-grey">
            <div className="contact-container">

                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h2 className="about-subtitle">Let's build something<br />great together</h2>
                        <p>Open to internships, collaborations, and backend development opportunities. Feel free to reach out.</p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=sgousejaheer@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                        >
                            Say Hello →
                        </a>
                    </div>

                    <div className="contact-right">
                        {links.map((item, idx) => {
                            const content = (
                                <>
                                    <div className={`icon icon-${item.type}`}>{item.icon}</div>
                                    <div>
                                        <small>{item.label}</small>
                                        <h4>{item.value}</h4>
                                    </div>
                                </>
                            );

                            return item.href ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`contact-card card-${item.type}`}
                                    key={idx}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div className="contact-card static" key={idx}>
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <footer className="footer-bar">
                    <p>© 2026 Syed Gouse Jaheer. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}

export default Contact;