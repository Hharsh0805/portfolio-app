import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBlog } from 'react-icons/fa';
import './Features.css';

const FeatureSection = ({ icon, title, content, image, link, index }) => (
  <motion.div
    className="features-section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="features-content">
      <motion.div
        className="icon-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.div>
      <h2>{title}</h2>
      <p>{content}</p>
      <motion.a
        href={link}
        className="read-more-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.a>
    </div>
    <motion.div
      className="features-image"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={title} />
    </motion.div>
  </motion.div>
);

const Features = () => {
  return (
    <section className="features">
      <FeatureSection
        index={0}
        icon={<FaUser />}
        title="Who am I?"
        content="I'm Harsh Sehgal, a final-year Electrical Engineering student at IET Lucknow, passionate about web development, software engineering, and AI prompting. With strong skills in the MERN stack, Python, and DSA, I'm working towards becoming a millionaire by 24 through innovative tech solutions..."
        image="/images/profile.png"
        link="/about"
      />
    
    </section>
  );
};

export default Features;

