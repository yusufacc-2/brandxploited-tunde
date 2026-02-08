import React from 'react';
import styles from './Roster.module.css';

const Roster = () => {
    const artists = [
        "ALICE COOPER", "ANTHRAX", "BACKSTREET BOYS",
        "BAD OMENS", "CULT", "CELINE DION",
        "ERIC B & RAKIM", "CHEMICAL BROTHERS", "GHOST"
    ];

    return (
        <section className={styles.rosterSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className="huge-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--brand-white)' }}>
                        OUR <span style={{ color: 'var(--brand-lime)' }}>ROSTER</span>
                    </h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.grid}>
                    {artists.map((artist, i) => (
                        <div key={i} className={styles.posterItem}>
                            <div className={styles.tape}></div>
                            <div className={styles.posterContent}>
                                <span className={styles.artistName}>{artist}</span>
                                <div className={styles.noise}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.actions}>
                    <button className={styles.viewAllBtn}>
                        <span className={styles.btnText}>VIEW FULL ROSTER</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Roster;
