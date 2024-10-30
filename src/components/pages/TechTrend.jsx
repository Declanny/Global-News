// src/components/TechTrend.js
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Using react-icons for the search icon
import './TechTrend.css'; // Add CSS file for styling

const TechTrend = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTrend, setSelectedTrend] = useState(null); // Track selected trend for details view

  const API_KEY = '06c2bda2d54644d290060def368f4351'; // Replace with your actual News API key
  const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setTrends(result.articles || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const handleTrendClick = (trend) => {
    setSelectedTrend(selectedTrend === trend ? null : trend);
  };

  return (
    <div className="tech-trend-container">
      <h1>Tech Trends</h1>
      <div className="tech-trend-list">
        {trends.map((trend) => (
          <div className="tech-trend-card" key={trend.url} onClick={() => handleTrendClick(trend)}>
            {trend.urlToImage && <img src={trend.urlToImage} alt={trend.title} className="tech-trend-image" />}
            <h2 className="tech-trend-title">{trend.title || 'No title available'}</h2>
            <p className="tech-trend-description">{trend.description || 'No description available'}</p>
            {selectedTrend === trend && (
              <div className="tech-trend-details">
                <p>{trend.content || 'No content available'}</p>
                <a href={trend.url} target="_blank" rel="noopener noreferrer" className="read-more">Read full article</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTrend;
