import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaReact />, description: 'React, Redux, HTML5, CSS3, JavaScript' },
    { name: 'Backend Development', icon: <FaNodeJs />, description: 'Node.js, Express, RESTful APIs' },
    { name: 'Database Management', icon: <FaDatabase />, description: 'MongoDB, MySQL, PostgreSQL' },
    { name: 'Programming Languages', icon: <FaCode />, description: 'JavaScript, Python, C++' },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="view-more"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="/about#skills">View More Skills</a>
      </motion.div>
    </section>
  );
};

export default Skills;

