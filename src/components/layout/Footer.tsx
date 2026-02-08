import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.topSection}>
                    <div className={styles.ticketStub}>
                        <div className={styles.stubHeader}>
                            <h2>ADMIT ONE</h2>
                            <span>NO REFUNDS</span>
                        </div>
                        <div className={styles.stubBody}>
                            <h3 className="huge-text" style={{ fontSize: '3rem', color: 'var(--brand-black)' }}>GET A QUOTE</h3>
                            <p style={{ color: 'var(--brand-black)', fontFamily: 'var(--font-body)' }}>START YOUR TOUR</p>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label>First name *</label>
                                <input type="text" placeholder="JOHNNY" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Last name *</label>
                                <input type="text" placeholder="SILVERHAND" />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Email *</label>
                            <input type="email" placeholder="ROCKSTAR@EXAMPLE.COM" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Phone</label>
                            <input type="tel" placeholder="+1 (555) 000-0000" />
                        </div>
                        <button className={styles.submitBtn}>SEND REQUEST</button>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.brandRow}>
                        <h1 className={styles.bxp}>BxP</h1>
                        <div className={styles.cols}>
                            <div className={styles.col}>
                                <h4>Menu</h4>
                                <Link href="/">About</Link>
                                <Link href="/">Services</Link>
                                <Link href="/">Contact Us</Link>
                            </div>
                            <div className={styles.col}>
                                <h4>Socials</h4>
                                <a href="#">Instagram</a>
                                <a href="#">Facebook</a>
                                <a href="#">Youtube</a>
                                <a href="#">TikTok</a>
                            </div>
                            <div className={styles.col}>
                                <h4>Contact</h4>
                                <p>info@BrandXploited.com</p>
                                <p>020 3051 8425</p>
                            </div>
                            <div className={styles.col}>
                                <h4>Legal</h4>
                                <Link href="#">Privacy Policy</Link>
                                <Link href="#">Accessibility</Link>
                            </div>
                        </div>
                    </div>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} BrandXploited // INDIE MUSIC MERCH</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
