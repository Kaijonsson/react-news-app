import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

import "./Newsfeed.mobile.css";
import "./NewsFeed.desktop.css";

function NewsFeed(counter) {
  const [articles, setArticles] = useState([]);
  const [mounted, setMounted] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const count = counter.counter;
    // if (!mounted) return;
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

  const openNewPage = (title, imageUrl, summary, url) => {
    const location = {
      pathname: "/summarizedNews",
      state: { title: title, imageUrl: imageUrl, summary: summary, url: url },
    };
    history.push(location);
    // use history.push('/some/path') here
  };

  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {articles.map(
            ({ publishedAt, id, imageUrl, title, summary, url }) => (
              <tr
                key={id}
                onClick={() => openNewPage(title, imageUrl, summary, url)}
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
