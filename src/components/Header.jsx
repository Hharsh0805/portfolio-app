"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Info, BookOpen, Phone, Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, href: "/" },
    { name: "About", icon: <Info size={20} />, href: "/about" },
    { name: "Blogs", icon: <BookOpen size={20} />, href: "/blogs" },
    { name: "Contact", icon: <Phone size={20} />, href: "/contact" },
  ]

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${darkMode ? "dark" : ""}`}>
      <div className="header-container">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/HSlogo2.jpeg" alt="Harsh-ify Logo" width={40} height={40} className="rounded-full" />
          <span className={`text-xl font-bold ${isScrolled ? "text-black dark:text-white" : "text-white"}`}>
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
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {mounted && (darkMode ? <Sun size={24} /> : <Moon size={24} />)}
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
              <a key={item.name} href={item.href} className="mobile-link" onClick={() => setIsOpen(false)}>
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <a href="/contact" className="button primary mobile-contact" onClick={() => setIsOpen(false)}>
              Let's Talk
            </a>
            <button className="mobile-theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

