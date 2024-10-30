// src/components/GlobalTrend.js
import React, { useState, useEffect } from 'react';
import './Blog.css'; // Reuse the Blog.css styles

const GlobalTrend = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  const API_KEY = '06c2bda2d54644d290060def368f4351'; // Replace with your actual News API key
  const url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`; // Fetch global news in English

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setNews(result.articles || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const handleNewsClick = (newsItem) => {
    setSelectedNews(selectedNews === newsItem ? null : newsItem);
  };

  return (
    <div className="blog-container">
      <h1>Nigeria News</h1>
      <div className="blog-list">
        {news.map((newsItem) => (
          <div className="blog-card" key={newsItem.url} onClick={() => handleNewsClick(newsItem)}>
            {newsItem.urlToImage && <img src={newsItem.urlToImage} alt={newsItem.title} className="blog-image" />}
            <h2 className="blog-title">{newsItem.title || 'No title available'}</h2>
            <p className="blog-description">{newsItem.description || 'No description available'}</p>
            {selectedNews === newsItem && (
              <div className="blog-details">
                <p>{newsItem.content || 'No content available'}</p>
                <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="read-more">Read full article</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalTrend;
