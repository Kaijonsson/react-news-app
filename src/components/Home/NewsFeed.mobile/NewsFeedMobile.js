import React, { useEffect, useState } from "react";

import "./NewsFeedMobile.mobile.css";
import { ItemSeparatorDiv } from "../../../globalCSS/styledComponents";

import { useHistory } from "react-router-dom";

function NewsFeedMobile(counter) {
  const [articles, setArticles] = useState([]);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const count = counter.counter;
    const fetchArticles = async () => {
      // if (mounted) return;
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
    return () => {
      setMounted(false);
    };
  }, [counter, mounted]);

  const history = useHistory();

  const openNewPage = (title, imageUrl, summary, url) => {
    const location = {
      pathname: "/summarizedNews",
      state: {
        title: title,
        imageUrl: imageUrl,
        summary: summary,
        url: url,
      },
    };
    history.push(location);
  };

  return (
    <div id="newsfeedmobilemaindiv">
      {articles.map(({ id, title, imageUrl, publishedAt, summary, url }) => (
        <div key={id}>
          <div
            className="newsCardContainer"
            onClick={() => openNewPage(title, imageUrl, summary, url)}
          >
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
          <ItemSeparatorDiv />
        </div>
      ))}
    </div>
  );
}

export default NewsFeedMobile;
