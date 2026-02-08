"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoWheel.module.css';

const VideoWheel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalHeight = rect.height;
            const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / totalHeight));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <section ref={containerRef} className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.titleWrapper}>
                    <h2 className="huge-text" style={{ fontSize: '10vw', opacity: 0.1 }}>GALLERY</h2>
                </div>

                <div
                    className={styles.wheel}
                    style={{
                        transform: `translateY(${100 - scrollProgress * 200}%) rotate(${(scrollProgress - 0.5) * 3}deg)`
                    }}
                >
                    {items.map((item) => (
                        <div key={item} className={styles.item}>
                            <div className={styles.placeholder}>
                                <span className={styles.number}>{item}</span>
                                <div className={styles.playButton} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.overlay}>
                    <span className="script-text" style={{ fontSize: '4rem', color: 'var(--brand-pink)' }}>The Experience</span>
                </div>
            </div>
        </section>
    );
};

export default VideoWheel;
