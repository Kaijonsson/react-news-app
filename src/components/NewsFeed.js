import React, { useEffect, useState } from "react";

function NewsFeed(counter) {
  const [articles, setArticles] = useState([]);
  const count = counter.counter;

  useEffect(() => {
    fetchArticles(count);
  }, [count]);

  const fetchArticles = async (counter) => {
    console.log(counter);
    if (counter === 0) {
      console.log("fel: ");
      setArticles(
        await (
          await fetch("https://api.spaceflightnewsapi.net/v3/articles")
        ).json()
      );
    } else {
      const newCount = counter.toString();

      console.log(
        "hej: ",
        await (
          await fetch(
            "https://api.spaceflightnewsapi.net/v3/articles?_start=" + newCount
          )
        ).json()
      );
    }
  };

  const PrintArticles = () => {
    console.log(articles);

    const articleElement = articles.map(({ imageUrl, id }) => (
      <div key={id}>
        <img
          src={imageUrl}
          alt="Headline images"
          style={{ maxHeight: "50px" }}
        />
      </div>
    ));
    return articleElement;
  };

  return (
    <>
      <PrintArticles />
    </>
  );
}

export default NewsFeed;
