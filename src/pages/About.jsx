import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../components/Skills1';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Header />
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
        </section>

        {/* Components for Additional Content */}
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default About;
