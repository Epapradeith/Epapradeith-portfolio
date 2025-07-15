import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle} data-text="Epapradeith Rachety">
          Epapradeith Rachety
        </h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>
        <p className={styles.description}>
          Building scalable web applications with React.js, Node.js, Spring Boot, and SQL/NoSQL databases.
        </p>
        <div className={styles.socialLinks}>
          <SocialLink
            href="https://github.com/Epaprodith03"
            icon={<FaGithub />}
            className={styles.socialLink}
          />
          <SocialLink
            href="http://www.linkedin.com/in/epapradeith-rachety-196243111"
            icon={<FaLinkedin />}
            className={styles.socialLink}
          />
          <SocialLink
            href="mailto:epaprodith0303@gmail.com"
            icon={<FaEnvelope />}
            className={styles.socialLink}
          />
        </div>
        <div>
          <a href="#contact" className={styles.ctaButton}>
            Get In Touch
          </a>
        </div>
      </div>

      {/* Floating shapes for visual interest */}
      <div className={styles.floatingShape1}></div>
      <div className={styles.floatingShape2}></div>
      <div className={styles.floatingShape3}></div>
    </section>
  );
}

function SocialLink({ href, icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </a>
  );
}
