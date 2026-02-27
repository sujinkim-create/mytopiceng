'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Mission', href: '#mission' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Partners', href: '#partnership' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarInner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>M</span>
          MyTopicEng
        </a>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`btn-primary ${styles.navCta}`} onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
