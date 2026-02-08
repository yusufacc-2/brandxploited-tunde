import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`split-layout ${styles.aboutSection}`}>
            <div className={`split-content ${styles.content}`}>
                <h2 className="huge-text" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'var(--brand-white)', marginBottom: '2rem' }}>
                    <span className={styles.highlight}>FULL SPECTRUM</span><br />
                    SOLUTIONS FOR<br />
                    REVENUE GROWTH
                </h2>
                <p className={styles.subheadline}>
                    From <span style={{ color: 'var(--brand-cyan)' }}>strategy</span> to <span style={{ color: 'var(--brand-pink)' }}>execution</span>.
                </p>

                <div className={styles.serviceList}>
                    {[
                        "ART Work creation and Design",
                        "High quality garment sourcing",
                        "Click and Print business model",
                        "We print, ship, you earn."
                    ].map((service, i) => (
                        <div key={i} className={styles.serviceItem}>
                            <span className={styles.number}>0{i + 1}</span>
                            <p>{service}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.actions}>
                    <button className="btn-aggressive">Contact Us Today</button>
                </div>
            </div>

            <div className={`${styles.collage} split-image`}>
                <div className={styles.collageText}>
                    <span>CREATE</span>
                    <span>DESTROY</span>
                    <span>REBUILD</span>
                </div>
            </div>
        </section>
    );
};

export default About;
