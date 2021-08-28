import React, { useEffect, useState } from "react";

import "./NewsFeedMobile.mobile.css";
import { ItemSeparatorDiv } from "./NewsFeed.styled";

function NewsFeedMobile(counter) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const count = counter.counter;
    const fetchArticles = async () => {
      if (count === 0) {
        setArticles(
          await (
            await fetch("https://api.spaceflightnewsapi.net/v3/articles")
          ).json()
        );
      } else {
        const newCount = count.toString();

        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles?_start=" + newCount
        );
        const data = await response.json();
        data.forEach((element) => {
          setArticles((articles) => [...articles, element]);
        });
      }
    };
    fetchArticles();
    return () => setArticles([]);
  }, [counter]);

  return (
    <div id="newsfeedmobilemaindiv">
      {articles.map(({ id, title, imageUrl, publishedAt }) => (
        <div key={id}>
          <ItemSeparatorDiv />
          <div className="newsCardContainer">
            <div className="listItem" id="imageContainer">
              <img src={imageUrl} alt="newspic" className="newsImage" />
            </div>
            <div className="listItem" id="title">
              {title}
            </div>
            <div className="listItem" id="date">
              {publishedAt.slice(5, 10)}-{publishedAt.slice(11, 16)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsFeedMobile;
