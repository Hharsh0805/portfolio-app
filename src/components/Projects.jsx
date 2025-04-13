import React from 'react'; 
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Dal-ivery',
      description: 'A full-stack MERN food delivery platform with user authentication, product management, and order tracking.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      github: 'https://github.com/Hharsh0805/food-delivery-app', // Your GitHub link for Dal-ivery
      demo: 'https://food-delivery-demo.com' // Replace with your actual live demo link
    },
    {
      title: 'Galera',
      description: 'Galera is a sleek real estate app for browsing and listing properties, built with Next.js and TypeScript.',
      image: '/images/galera.png',
      github: 'https://github.com/Hharsh0805/task-managehttps://github.com/Hharsh0805/Gallera', // Your GitHub link for Task Management App
      demo: 'https://real-estate-xi-sooty.vercel.app/' // Replace with your actual live demo link
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience.',
      image: '/images/portfolio.png', // Add image path for the portfolio site
      github: 'https://github.com/Hharsh0805/portfolio/', // Your GitHub link for Personal Portfolio Website
      demo: 'https://portfolio-six-inky-47.vercel.app/' // Replace with your actual live demo link
    },
    {
      title: 'Ashria-voice bot',
      description: 'A web application built for managing Ashria-related tasks and projects.',
      image: '/images/ironman.jpeg',
      github: 'https://github.com/Hharsh0805/Ashria', // Your GitHub link for Ashria-voice bot
      demo: 'https://github.com/Hharsh0805/Ashria/blob/main/testing.py' // Replace with your actual live demo link
    },
    {
      title: 'Authentication App',
      description: 'A MERN-based authentication app featuring user registration, login, and session management.',
      image: '/images/authentication.png',
      github: 'https://github.com/Hharsh0805/authentication-app', // Your GitHub link for Authentication App
      demo: 'https://authentication-app-ui-theta.vercel.app/signup' // Replace with your actual live demo link
    },
    {
      title: 'HealthAI',
      description: 'A cutting-edge AI-powered healthcare app that offers personalized health insights and recommendations.',
      image: '/images/HealthAI.png', // Path to the HealthAI image
      github: 'https://github.com/Hharsh0805/healthai-app', // Replace with your actual GitHub link for HealthAI
      demo: 'https://health-ml-app-ui.vercel.app/' // Replace with your actual live demo link for HealthAI
    },
    {
      title: 'Music Player',
      description: 'A sleek and responsive music player app that allows users to play, pause, and manage playlists seamlessly.',
      image: '/images/music-player.png', // Path to the Music Player image
      github: 'https://github.com/Hharsh0805/MusicPlayer', // GitHub link for Music Player
      demo: 'https://music-player-ten-dun.vercel.app/' // Live demo link for Music Player
    }    
   
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
