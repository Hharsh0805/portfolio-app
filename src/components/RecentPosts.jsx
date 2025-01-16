import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './RecentPosts.css';

const RecentPosts = () => {
  const blogs = [
    {
      title: "SpaceX's Latest Achievements in Rocket Reusability",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/spacex-achievements"
    },
    {
      title: "The Impact of AI on Modern Software Development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      link: "/blog/ai-impact-software-development"
    },
    {
      title: "Cybersecurity Best Practices for Remote Work",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/cybersecurity-remote-work"
    },
  ];

  const projects = [
    {
      title: 'Music Player',
      description: 'A sleek and responsive music player app that allows users to play, pause, and manage playlists seamlessly.',
      image: '/images/music-player.png', // Path to the Music Player image
      github: 'https://github.com/Hharsh0805/MusicPlayer', // GitHub link for Music Player
      demo: 'https://music-player-ten-dun.vercel.app/' // Live demo link for Music Player
    } ,
    {
      title: 'Dal-ivery',
      description: 'A full-stack MERN food delivery platform with user authentication, product management, and order tracking.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      github: 'https://github.com/Hharsh0805/food-delivery-app',
      demo: 'https://food-delivery-demo.com'
    },
    {
      title: 'HealthAI',
      description: 'A cutting-edge AI-powered healthcare app that offers personalized health insights and recommendations.',
      image: '/images/HealthAI.png', // Path to the HealthAI image
      github: 'https://github.com/Hharsh0805/health-ml-website', // Replace with your actual GitHub link for HealthAI
      demo: 'https://health-ml-app-ui.vercel.app/' // Replace with your actual live demo link for HealthAI
    },
  ];

  return (
    <div>
      <section className="recent-posts">
        <div className="container">
          <div className="heading-container">
            <h2>Recent Blog Posts</h2>
          </div>
          <div className="posts-container">
            {blogs.map((blog, index) => (
              <motion.div
                className="post-card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <img src={blog.image} alt={blog.title} />
                <h3>{blog.title}</h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={blog.link} className="read-more-link">Read More</Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="explore-more-container"
          >
            <Link to="/blogs" className="explore-more-btn">
              Explore More Blogs <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <div className="heading-container">
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-container">
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="explore-more-container"
          >
            <Link to="/about#projects" className="explore-more-btn">
              View All Projects <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecentPosts;
