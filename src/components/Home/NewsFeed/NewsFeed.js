import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import "./Newsfeed.mobile.css";
import "./NewsFeed.desktop.css";
import globalStyles from "../../../globalCSS/globalStyles";

function NewsFeed(counter) {
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
    <>
      <Table striped bordered hover>
        <tbody>
          {articles.map(({ publishedAt, id, imageUrl, title }) => (
            <tr key={id}>
              <td className="tableData">
                {publishedAt.slice(5, 10)}-{publishedAt.slice(11, 16)}
              </td>
              <td>
                <img src={imageUrl} alt="Article" className="newsImage" />
              </td>
              <td className="tableData">{title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default NewsFeed;
