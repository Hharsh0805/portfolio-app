'use client'

import React, { useState, useEffect } from "react"
import "./global.css"
import "./Home.css"
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Skills from "../components/Skills"
import RecentPosts from "../components/RecentPosts"
import Footer from "../components/Footer"
import FloatingIcons from "../components/FloatingIcons"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode))
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <main className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <FloatingIcons darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Carousel />
      <Skills />
      <RecentPosts />
      <Footer />
    </main>
  )
}