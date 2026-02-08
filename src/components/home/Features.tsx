import React from 'react';
import styles from './Features.module.css';

const brandPillars = [
    {
        title: "INDEPENDENT",
        description: "Global capitalises on our abilities to be nimble, flexible, and innovative.",
        color: "var(--brand-pink)"
    },
    {
        title: "INNOVATIVE",
        description: "Protecting brand integrity. Global works closely with clients to build unique programs.",
        color: "var(--brand-lime)"
    },
    {
        title: "EXPERTS",
        description: "With our extensive knowledge, experience and understanding of the merchandising and brand-building industry.",
        color: "var(--brand-cyan)"
    }
];

const stats = [
    { value: "100%", label: "ROI earned by all our signed artists", color: "var(--brand-pink)" },
    { value: "24/7", label: "Our fulfillment promise to you", color: "var(--brand-cyan)" },
    { value: "210%", label: "Average increase in revenue Merch creates for artists", color: "var(--brand-lime)" }
];

const Features = () => {
    return (
        <section id="services" className={styles.features}>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    <span>REVOLUTIONISING MERCHANDISING /// BEST-IN-CLASS PRODUCT DEVELOP /// ACTURING, AND CONSUMER SALES /// </span>
                    <span>REVOLUTIONISING MERCHANDISING /// BEST-IN-CLASS PRODUCT DEVELOP /// ACTURING, AND CONSUMER SALES /// </span>
                </div>
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.pillars}>
                    {brandPillars.map((pillar, i) => (
                        <div key={i} className={styles.pillarCard} style={{ borderColor: pillar.color }}>
                            <div className={styles.cardHeader} style={{ background: pillar.color }}>
                                <span className={styles.trackNum}>TRACK 0{i + 1}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <h2 className={styles.pillarTitle} style={{ color: pillar.color }}>{pillar.title}</h2>
                                <p className={styles.pillarDesc}>{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.stats}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.cassette}>
                            <div className={styles.tapeLabel} style={{ borderBottom: `4px solid ${stat.color}` }}>
                                <span className={styles.statValue} style={{ color: stat.color }}>{stat.value}</span>
                            </div>
                            <div className={styles.spools}>
                                <div className={styles.spool}></div>
                                <div className={styles.spool}></div>
                            </div>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
