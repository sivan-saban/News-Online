import React, { useEffect, useState } from "react";
import NewModel from "../../../Model/newsModel";
import newsService from "../../../Services/NewsService";
import "./News.css";
import Spinner from "../../Spinner/Spinner";

function News(): JSX.Element {
  const [news, setUseNews] = useState<NewModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const categories = ["business", "entertainment", "general", "health", "science", "technology"];

  useEffect(() => {
    setLoading(true);
    newsService
      .getNews()
      .then((news) => {
        setUseNews(news.articles);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, []);

  const getNewsByCat = async (cat: string) => {
    setLoading(true);
    try {
      await newsService
        .getNewsByCategories(cat)
        .then((news) => {
          setUseNews(news.articles);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log('Error fetching news data:', error);
    }
  };

  return (
    <div className="News">
      <h1>Israel News </h1>

      {categories.map((cat) => (
        <button key={cat} type="button" className="btn btn-secondary" onClick={() => getNewsByCat(cat)}>
          {cat}
        </button>
      ))}
       <br /><br />

      {loading && <Spinner/>}

      {!loading &&
        news.map((news, index) => (
          <div key={index} className="card text-bg-light mb-3 max-width: 18rem;">
            <div className="card-header">{ new Date(news.publishedAt).toLocaleString('en-GB')}</div>
            <div className="card-body">
              <p className="card-text">{news.title}</p>
              <a className="card-text" href={news.url} target="_blank">
                To the Article
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default News;
