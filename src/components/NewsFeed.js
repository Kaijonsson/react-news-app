import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function NewsFeed(counter) {
  const [articles, setArticles] = useState([]);
  console.log(articles);

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
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(({ publishedAt, id, imageUrl, title }) => (
            <tr key={id}>
              <td>
                {publishedAt.slice(5, 10)}-{publishedAt.slice(11, 16)}
              </td>
              <td>
                <img
                  src={imageUrl}
                  alt="Article picture"
                  style={{ maxHeight: "50px" }}
                />
              </td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
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
