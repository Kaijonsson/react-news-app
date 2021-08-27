import React, { useEffect, useState } from "react";

function NewsFeed(counter) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const count = counter.counter;
    console.log(count);
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
        console.log("data: ", data);
        data.forEach((element) => {
          setArticles((articles) => [...articles, element]);
        });
      }
    };
    fetchArticles();
  }, [counter]);

  return (
    <div>
      {console.log(articles)}
      {articles.map(({ imageUrl, id }) => (
        <div key={id}>
          <img
            src={imageUrl}
            alt="Headline images"
            style={{ maxHeight: "50px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;

// console.log(
//     await (
//       await fetch(
//         "https://api.spaceflightnewsapi.net/v3/articles?_start=" +
//           newCount
//       )
//     ).json()
//   );
