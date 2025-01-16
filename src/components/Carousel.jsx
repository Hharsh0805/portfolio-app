'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Code2, FileJson, Database, Server, 
  Terminal, Cpu, Globe, Cloud, Layers, 
  Binary, Hash, Box
} from 'lucide-react'

import './carousel.css';

const slides = [
  {
    textHeading: "Hello, I'm Harsh. I'm a Freelance Web Developer.",
    description: 'With a keen eye for design and a knack for innovative solutions, I specialize in creating beautiful, functional, and user-centric websites that stand out.',
    img: '/images/carousel1.png',
    buttons: [
      { text: 'Explore', link: '/explore' },
      { text: 'Community', link: '/community' }
    ]
  },
  {
    textHeading: 'Passionate MERN Stack Developer',
    description: 'Specializing in React, Node.js, and MongoDB, I create dynamic and responsive web applications that deliver exceptional user experiences.',
    img: '/images/carousel2.jpg',
    buttons: [
      { text: 'View Projects', link: '/about#projects' },
      { text: 'My Skills', link: '/about#skills' }
    ]
  },
  {
    textHeading: 'Prolific Tech Blogger',
    description: 'I share insights on the latest web development trends, best practices, and innovative solutions. Join me in exploring the ever-evolving world of technology and software engineering.',
    img: 'https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    buttons: [
      { text: 'Read Blog', link: '/blogs' },
      { text: 'Subscribe', link: '/subscribe' }
    ],
    imageLeft: true
  }
]
const techIcons = [
  { Icon: FileJson, name: "JavaScript", color: "#F7DF1E" },
  { Icon: Code2, name: "Python", color: "#3776AB" },
  { Icon: Binary, name: "C++", color: "#00599C" },
  { Icon: Database, name: "MongoDB", color: "#47A248" },
  { Icon: Server, name: "Node.js", color: "#339933" },
  { Icon: Terminal, name: "Shell", color: "#4EAA25" },
  { Icon: Cpu, name: "Systems", color: "#A8B9CC" },
  { Icon: Globe, name: "Web", color: "#E34F26" },
  { Icon: Cloud, name: "AWS", color: "#FF9900" },
  { Icon: Layers, name: "Stack", color: "#61DAFB" },
  { Icon: Hash, name: "Git", color: "#F05032" },
  { Icon: Box, name: "Docker", color: "#2496ED" }
]
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  const [backgroundIcons] = useState(
    techIcons.map((icon) => ({
      ...icon,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 10}s`
      }
    }))
  )
  return (
    <div className="carousel">
      <div className="carousel-background"></div>


      {backgroundIcons.map((icon, index) => (
  <div
    key={index}
    className="tech-icon"
    style={{
      ...icon.style,
      filter: `drop-shadow(0 0 4px ${icon.color})`
    }}
  >
    <icon.Icon 
      size={24} 
      color={icon.color} 
      style={{ opacity: 0.6 }}
    />
  </div>
))}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <div
            className={`carousel-content ${
              slide.imageLeft ? 'reverse-layout' : ''
            }`}
          >
            <div className="text-container">
              <h1 className="heading">{slide.textHeading}</h1>
              <p className="description">{slide.description}</p>
              <div className="button-group">
                {slide.buttons.map((button, idx) => (
                  <a
                    key={idx}
                    href={button.link}
                    className={`button ${idx === 0 ? 'primary' : 'secondary'}`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="image-container">
              <img
                src={slide.img || '/placeholder.svg'}
                alt={slide.textHeading}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        <ChevronLeft className="icon" />
      </button>
      <button className="next" onClick={nextSlide}>
        <ChevronRight className="icon" />
      </button>
      <div className="dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
