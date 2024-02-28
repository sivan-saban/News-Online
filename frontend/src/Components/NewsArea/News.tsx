import NewModel from "../../Model/newsModel";
import newsService from "../../Services/NewsService";
import "./News.css";
import { useEffect, useState } from "react";


function News(): JSX.Element {
  // show all news
  //const [news, setUseNews] = useState<any[]>([]);
  const [news, setUseNews] = useState<NewModel[]>([]);


  useEffect (() => {
    newsService
      .getNews()
      .then((news) => {
      setUseNews(news.articles)
    })
      .catch((err) => alert(err.message));
  }, []);
console.log(news);

  return (
    <div className="News">
      <h1>Israel News </h1>
     <br/>
    {news.map((news, index) => (

        <div key={index} className="card text-bg-light mb-3 max-width: 18rem;">
        <div className="card-header">{news.publishedAt.slice(11, 16)}</div>
        <div className="card-body">
          {/* <h5 class="card-title">Light card title</h5> */}
          <p className="card-text">{news.title}</p>
        </div>
      </div>
      ))
    }
    
    {/* {news.map((news) => (
        <div className="Box">
          {news.publishedAt.slice(11, 16)}<br/>
          {news.title}
        </div>
      ))
    } */}

      
    </div>
  );
}

export default News;
