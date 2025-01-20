'use client'

import { useState, useEffect } from 'react'
import { Code2, FileJson, Database, Server, 
  Terminal, Cpu, Globe, Cloud, Layers, 
  Binary, Hash, Box } from 'lucide-react'
import './FloatingIcons.css'

const iconSets = [
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

export default function FloatingIcons() {
  const [backgroundIcons, setBackgroundIcons] = useState([])

  useEffect(() => {
    // Generate icons with random positions and animation timings
    const icons = iconSets.map((icon) => ({
      ...icon,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 15}s`,
        opacity: 0.4 + Math.random() * 0.3
      }
    }))
    setBackgroundIcons(icons)
  }, [])

  return (
    <div className="floating-icons-container">
      {backgroundIcons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon"
          style={{
            ...icon.style,
            filter: `drop-shadow(0 0 3px ${icon.color})`
          }}
        >
          <icon.Icon
            size={24}
            color={icon.color}
          />
        </div>
      ))}
    </div>
  )
}
