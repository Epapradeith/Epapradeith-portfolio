import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerDefault}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <span className={styles.logoIconSymbol}>ER</span>
          </div>
          <span className={styles.logoText}>ER</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <nav className={styles.mobileNavContainer}>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#education" onClick={() => setIsMenuOpen(false)}>Education</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </nav>
        </div>
      )}

      {/* Floating decoration */}
      <div className={styles.headerDecoration}></div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      className={styles.mobileNavLink}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
