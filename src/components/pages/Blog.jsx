import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import the CSS file for styling

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track selected blog

  const API_KEY = '06c2bda2d54644d290060def368f4351'; // Replace with your actual News API key
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('API Response:', result);
        setBlogs(result.articles || []);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const handleBlogClick = (blog) => {
    // Toggle the selected blog
    setSelectedBlog(selectedBlog === blog ? null : blog);
  };

  return (
    <div className="blog-container">
      <h1>Business News</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.url} onClick={() => handleBlogClick(blog)}>
            {blog.urlToImage && <img src={blog.urlToImage} alt={blog.title} className="blog-image" />}
            <h2 className="blog-title">{blog.title || 'No title available'}</h2>
            <p className="blog-description">{blog.description || 'No description available'}</p>
            {/* Conditionally render detailed view */}
            {selectedBlog === blog && (
              <div className="blog-details">
                <p>{blog.content || 'No content available'}</p>
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="read-more">Read full article</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
