import React, { useEffect, useState } from "react";

import "./NewsFeedMobile.mobile.css";

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
  }, [counter]);

  return (
    <div>
      {articles.map(({ id, title, imageUrl, publishedAt }) => (
        <div key={id}>
          <li>{title}</li>
          <li>
            <img src={imageUrl} alt="newspic" style={{ height: "50px" }} />
          </li>
          <li>{publishedAt}</li>
        </div>
      ))}
    </div>
  );
}

export default NewsFeedMobile;
