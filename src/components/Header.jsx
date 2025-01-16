'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home, Info, BookOpen, Phone, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom';  // Importing Link correctly
import './Header.css';  // Ensure the path is correct and CSS is being imported

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', icon: <Home size={20} />, href: '/' },
    { name: 'About', icon: <Info size={20} />, href: '/about' },
    { name: 'Blogs', icon: <BookOpen size={20} />, href: '/blogs' },
    { name: 'Contact', icon: <Phone size={20} />, href: '/contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Add dynamic text color based on scroll */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/HSlogo2.jpeg"
            alt="Harsh-ify Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            Harsh-<span className="italic">Ify</span>
          </span>
        </Link>

        <nav className="nav-links hidden-md">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="nav-actions hidden-md">
          <a href="/contact" className="button primary">
            Let's Talk
          </a>
          <button className="theme-toggle">
            {/* Theme toggle logic */}
            {mounted && <Moon size={24} />}
          </button>
        </div>

        <button className="menu-toggle md-only" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu md-only">
          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href="/contact"
              className="button primary mobile-contact"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
