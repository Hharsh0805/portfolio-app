import React, { useState, useEffect } from 'react';
import { blogPosts } from './blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    <img src={post.image} alt={post.title} />
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <button onClick={() => onReadMore(post)}>Read More</button>
  </div>
);

const ReaderModal = ({ post, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <div className="scrollable-content">
        <p>{post.fullContent}</p>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
    <Header/>
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
        />
      )}
    </div>
    <Footer/>
    </>
    
  );
};

export default Blog;
