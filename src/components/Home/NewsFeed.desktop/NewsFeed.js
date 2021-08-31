import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

import "./NewsFeed.desktop.css";

import { useSelector } from "react-redux";
import { fetchNext } from "../../../actions";
import { useDispatch } from "react-redux";

function NewsFeed() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.ApiCaller);
  const apiArray = apiData.articles;
  const counter = useSelector((state) => state.CounterReducer);
  const history = useHistory();

  useEffect(() => {
    if (counter >= 10) {
      (async () => {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles?_start=" + counter
        );
        const data = await response.json();
        if (data) {
          data.forEach((element) => {
            dispatch(fetchNext(element));
          });
        }
      })();
    }
  }, [counter]);

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
          {apiArray.map(
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
