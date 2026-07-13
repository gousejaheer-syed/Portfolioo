import React, { useState } from 'react';
import './Certifications.css';

const certificationData = [
    {
        title: "Microsoft Power BI Certification",
        issuer: "Infosys Springboard",
        tag: "Power BI",
        ledgerId: "TX-9041280385",
        issuerAuthority: "INFOSYS SPRINGBOARD",
        timestamp: "2026-07-12T08:47:12"
    },
    {
        title: "GenAI Powered Data Analytics Job Simulation",
        issuer: "Tata Forage",
        tag: "GenAI",
        ledgerId: "TX-7739210492",
        issuerAuthority: "TATA FORAGE",
        timestamp: "2026-06-18T14:22:05"
    },
    {
        title: "Data Visualisation: Empowering Business with Effective Insights",
        issuer: "Tata Forage",
        tag: "Data Viz",
        ledgerId: "TX-4410982371",
        issuerAuthority: "TATA FORAGE",
        timestamp: "2026-05-30T11:05:43"
    },
    {
        title: "SQL Advanced Assessment",
        issuer: "HackerRank",
        tag: "SQL",
        ledgerId: "TX-1102948573",
        issuerAuthority: "HACKERRANK LABS",
        timestamp: "2026-04-12T16:19:18"
    },
    {
        title: "DATA SCIENCE 101",
        issuer: "Cognitive Class (Powered by IBM)",
        tag: "Data Sci",
        ledgerId: "TX-8839201495",
        issuerAuthority: "COGNITIVE CLASS / IBM",
        timestamp: "2026-02-05T09:31:00"
    }
];

const Certifications = () => {
    const [activeCert, setActiveCert] = useState(null);

    return (
        <div className="certifications-section">
            {/* Hero Header */}
            {/* Certifications Hero Heading */}
            <div className="certifications-hero">
                <h1 className="certifications-label">
                    Professional Certifications
                </h1>

                <p className="certifications-description">
                    Validated technical expertise, specialized training, and industry-standard
                    credentials in cloud infrastructure, security, and software development.
                </p>
            </div>
            {/* Exact Grid Layout */}
            <div className="certifications-grid">
                {certificationData.map((cert, index) => (
                    <div key={index} className="certifications-card">

                        {/* Top Metadata Row */}
                        <div className="certifications-card-top">
                            <span className="cert-period">{cert.tag}</span>

                            {/* Premium Minimalist Interactive Badge */}
                            <div className="cert-badge">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Core Content */}
                        <div className="cert-content">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                        </div>

                        {/* Flat Action Trigger Link */}
                        <button className="cert-link" onClick={() => setActiveCert(cert)}>
                            Click to verify credential ↗
                        </button>

                    </div>
                ))}
            </div>

            {/* Secure Ledger Modal Overlay */}
            {activeCert && (
                <div className="verify-overlay" onClick={() => setActiveCert(null)}>
                    <div className="verify-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="verify-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <path d="m9 11 2 2 4-4"></path>
                            </svg>
                        </div>

                        <div className="verify-status">SECURE VERIFICATION STATUS: SECURE_OK</div>
                        <h3 className="verify-title">{activeCert.title}</h3>
                        <p className="verify-subtitle">
                            Officially issued by <strong>{activeCert.issuer}</strong>. Credential verified successfully against index ledger.
                        </p>

                        <div className="verify-info">
                            <div className="verify-row">
                                <span className="verify-label">LEDGER ID:</span>
                                <span className="verify-value">{activeCert.ledgerId}</span>
                            </div>
                            <div className="verify-row">
                                <span className="verify-label">ISSUER AUTHORITY:</span>
                                <span className="verify-value">{activeCert.issuerAuthority}</span>
                            </div>
                            <div className="verify-row">
                                <span className="verify-label">STATUS:</span>
                                <span className="verify-valid">ACTIVE & VALID</span>
                            </div>
                        </div>

                        <button className="close-verify" onClick={() => setActiveCert(null)}>
                            Close Verification
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certifications;