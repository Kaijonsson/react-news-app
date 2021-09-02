import React, { useEffect } from "react";
import { ItemSeparatorDiv } from "../../../globalCSS/styledComponents";
import { useHistory } from "react-router-dom";

import "./NewsFeedMobile.mobile.css";

import { useSelector } from "react-redux";
import { fetchNext } from "../../../actions";
import { useDispatch } from "react-redux";

function NewsFeedMobile() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.ApiCaller);
  const apiArray = apiData.articles;
  const counter = useSelector((state) => state.CounterReducer);
  const history = useHistory();

  useEffect(() => {
    if (counter >= 10) {
      (async () => {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles?_start=" +
            (counter - 1)
        );
        const data = await response.json();
        if (data) {
          data.forEach((element) => {
            dispatch(fetchNext(element));
          });
        }
      })();
    }
  }, [counter, dispatch]);

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
    <div id="newsfeedmobilemaindiv">
      {apiArray.map(({ id, title, imageUrl, publishedAt, summary, url }) => (
        <div key={id}>
          <div
            className="newsCardContainer"
            onClick={() =>
              openNewPage(title, imageUrl, summary, url, publishedAt)
            }
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
