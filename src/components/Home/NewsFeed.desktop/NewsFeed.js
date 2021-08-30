import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

import "./NewsFeed.desktop.css";

function NewsFeed(counter) {
  const [articles, setArticles] = useState([]);
  const [mounted, setMounted] = useState(true);

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
    return () => {
      setMounted(false);
    };
  }, [counter, mounted]);

  const history = useHistory();

  const openNewPage = (title, imageUrl, summary, url, date) => {
    const location = {
      pathname: "/summarizedNews",
      state: {
        title: title,
        imageUrl: imageUrl,
        summary: summary,
        url: url,
        publishedAt: date,
      },
    };
    history.push(location);
  };

  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {articles.map(
            ({ publishedAt, id, imageUrl, title, summary, url }) => (
              <tr
                key={id}
                onClick={() =>
                  openNewPage(title, imageUrl, summary, url, publishedAt)
                }
                className="tableRows"
              >
                <td className="tableData">
                  {publishedAt.slice(5, 10)}-{publishedAt.slice(11, 16)}
                </td>
                <td>
                  <img src={imageUrl} alt="Article" className="newsImage" />
                </td>
                <td className="tableData">{title}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default NewsFeed;
