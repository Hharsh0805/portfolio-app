import React from 'react';
import './global.css';
import './Home.css';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Skills from '../components/Skills';
import RecentPosts from '../components/RecentPosts';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Carousel />
      <Skills />
      <RecentPosts />
      <Footer />
    </main>
  )
}
