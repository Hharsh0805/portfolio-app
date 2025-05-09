'use client'

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import './About.css';
import TechStack from '../components/TechStack';

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark'); // Ensure dark class is applied to <html>
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class
    }
  }, [darkMode]);

  return (
    <div className={`about ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} isAboutPage={true} />
      <main className="about-container">
        {/* About Me Section */}
        <section className="about-me">
          <h1 className="headings">About Me</h1>
          <p className="about-me-text">
            Hello👋, I’m Harsh Sehgal, a driven web developer and electrical engineering student at IET Lucknow, with a passion for building innovative web applications and solving complex problems. Over the years, I’ve honed my skills in full-stack development, AI prompting, and data structures and algorithms.
            I’m currently pursuing a bachelor’s degree in Electrical Engineering at IET Lucknow, where I’ve developed a strong foundation in both hardware and software technologies. Alongside my academic journey, I’ve actively immersed myself in web development and programming.
          </p>
        </section>

        {/* Skills & Interests Section */}
        <section className="skills-interests">
          <h2 className="headings">Skills & Interests</h2>
          <p className="skills-text">
            I specialize in Web Development, with expertise in React, Node.js, and MongoDB, creating dynamic and responsive websites. I continuously update my skills to enhance AI-driven solutions through effective prompt engineering. With strong problem-solving capabilities, I excel in Data Structures and Algorithms, allowing me to develop efficient solutions. Additionally, I have extensive experience in WordPress development, particularly with the Astra and OceanWP themes, which enables me to build customizable, high-performing websites that cater to diverse user needs.
          </p>
          <p className="skills-text">
            I have a wide range of interests, including reading books and interacting with financial experts and advisors to broaden my knowledge. I enjoy listening to podcasts on business, nature, and wildlife. Traveling is something I love, and I engage in sports like cricket, table tennis, and chess. As a music listener, I find joy in discovering new tunes, and I also love spending time playing with dogs.
          </p>
          <h2 className='headings'>Tech Stack</h2>
          
        </section>
        <TechStack />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default About;
