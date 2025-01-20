import React, { useState, useEffect } from 'react';
import { blogPosts } from './blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Maximize2, Minimize2 } from 'lucide-react';
import './Blogs.css';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    className="theme-toggle"
    onClick={() => setDarkMode(!darkMode)}
    aria-label="Toggle dark mode"
  >
    {darkMode ? '☀️' : '🌙'}
  </button>
);

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="category-filter">
    {categories.map(category => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        className={selectedCategory === category ? 'active' : ''}
      >
        {category}
      </button>
    ))}
  </div>
);

const BlogCard = ({ post, onReadMore }) => (
  <div className="blog-card">
    <img src={post.image || "/placeholder.svg"} alt={post.title} />
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <button onClick={() => onReadMore(post)}>Read More</button>
  </div>
);

const ReaderModal = ({ post, onClose, isFullView, toggleFullView }) => (
  <div className={`modal ${isFullView ? 'full-view' : ''}`}>
    <div className="modal-content">
      <button className="full-view-toggle" onClick={toggleFullView} aria-label="Toggle full view">
        {isFullView ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
      </button>
      <h2>{post.title}</h2>
      <img src={post.image || "/placeholder.svg"} alt={post.title} />
      <div className="scrollable-content">
        <p>{post.fullContent}</p>
      </div>
      <div className="modal-buttons">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFullView, setIsFullView] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleFullView = () => {
    setIsFullView(!isFullView);
  };

  return (
    <>
      <Header />
      <div className={`blog-container ${darkMode ? 'dark-mode' : ''}`}>
        <header>
          <h1>Harsh Sehgal's Blog</h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              onReadMore={setSelectedPost}
            />
          ))}
        </div>
        {selectedPost && (
          <ReaderModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            isFullView={isFullView}
            toggleFullView={toggleFullView}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
