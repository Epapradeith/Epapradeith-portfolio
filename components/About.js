import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.professionalCard}>
            <h3 className={styles.sectionTitle}>Professional Summary</h3>
            <p className={styles.description}>{"Full Stack Developer with over 3 years of experience delivering scalable web applications in Agile teams. Built and optimized full-stack solutions using React.js, Node.js, Spring Boot, and SQL/NoSQL databases. Developed CI/CD pipelines, reduced deployment times by 40%, and improved web performance by up to 45%. Experienced in designing RESTful APIs, implementing secure user authentication with OAuth 2.0, and mentoring junior engineers on scalable architecture."}</p>
          </div>
          <div className={styles.backgroundCard}>
            <h3 className={styles.sectionTitle}>Background</h3>
            <p className={styles.description}>
              {"I'm passionate about building efficient, user-friendly applications that solve real-world problems. My journey in software development began at Value Momentum where I honed my skills working on various enterprise-level projects. Currently, I'm expanding my knowledge through a Master's program at the University of Alabama at Birmingham, focusing on advanced computing concepts and emerging technologies."}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.geometricShape}></div>
    </section>
  );
}
