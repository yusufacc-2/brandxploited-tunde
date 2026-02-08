import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={`split-layout ${styles.heroSection}`}>
            <div className={`split-content ${styles.content}`}>
                <div className={styles.label}>
                    <span className={styles.blink}>[ RECORDING ]</span>
                </div>
                <h1 className="huge-text" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: 0.85, marginBottom: '2rem' }}>
                    <span className={styles.textLayer} data-text="MUSIC">MUSIC</span>
                    <span className={styles.textLayer} style={{ color: 'var(--brand-lime)' }} data-text="MERCH">MERCH</span>
                    <span className={styles.textLayerOutline} data-text="& CLOTHING">& CLOTHING</span>
                    <span className={styles.textLayer} style={{ color: 'var(--brand-pink)' }} data-text="BRAND">BRAND</span>
                </h1>

                <div className={styles.signatureWrapper}>
                    <p className="script-text">You make money with No risk</p>
                </div>

                <p className={styles.description}>
                    <span className={styles.highlight}>Empowering musicians</span> to earn more revenue from their Brand Value.
                    We bring campaigns that deliver from strategy to execution.
                </p>

                <div className={styles.actions}>
                    <button className="btn-aggressive">Get a Quote</button>
                    <div className={styles.scroller}>
                        <span>/// SCROLL FOR ROSTER ///</span>
                    </div>
                </div>
            </div>

            <div className={`${styles.visualizer} split-image`}>
                {/* Visualizer bars simulation */}
                <div className={styles.bars}>
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={styles.bar} style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
                <div className={styles.overlayText}>
                    <h2>INDIE<br />VIBES</h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
