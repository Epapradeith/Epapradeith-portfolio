// pages/index.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition duration-500">
      <Head>
        <title>Epapradeith Rachety | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Epapradeith Rachety, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="overflow-x-hidden scroll-smooth">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
