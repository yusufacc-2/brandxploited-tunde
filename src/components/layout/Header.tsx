import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.glitchText} data-text="GLOBAL">GLOBAL</span>
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.links}>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                    <button className="btn-aggressive" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>
                        Let's Talk
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
