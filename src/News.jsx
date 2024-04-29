// News.js
import React, { useEffect, useState } from "react";
import NewsAPI from "newsapi";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = "b12e285fdfc54f63bbac04349723ce61";
    const newsapi = new NewsAPI(apiKey);

    // Example query for top headlines
    newsapi.v2
      .topHeadlines({
        q: "trump",
        category: "politics",
        language: "en",
        country: "us",
      })
      .then((response) => {
        console.log(response);
        setNewsData(response.articles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <div className="news">
      <h2>Top Headlines</h2>
      <ul>
        {newsData.map((article) => (
          <li key={article.title}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
