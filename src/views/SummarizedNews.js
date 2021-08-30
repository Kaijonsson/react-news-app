import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import {
  HomeContainer,
  ItemSeparatorDiv,
  StyledButton,
} from "../globalCSS/styledComponents";
import "./SummarizedNews.style/SummarizedNews.mobile.css";
import "./SummarizedNews.style/SummarizedNews.desktop.css";

function SummarizedNews() {
  const location = useLocation();
  const newsPic = location.state.imageUrl;
  const title = location.state.title;
  const summary = location.state.summary;
  const URL = location.state.url;
  const publishedAt = location.state.publishedAt;

  return (
    <HomeContainer id="mainContainer">
      <StyledButton id="backButton">
        <Link to="/">Home</Link>
      </StyledButton>
      <div id="image">
        <img src={newsPic} alt={newsPic} id="mainPicture" />
      </div>
      <ItemSeparatorDiv />
      <div id="summaryTitle">
        <h1>{title}</h1>
      </div>
      <ItemSeparatorDiv />
      <div id="summary">
        <p>{summary}</p>
      </div>
      <ItemSeparatorDiv />
      <div id="articleURL">
        <a href={URL} target="_blank">
          Article Website
        </a>
        <p>
          Published at: {publishedAt.slice(5, 10)}-{publishedAt.slice(11, 16)}
        </p>
      </div>
    </HomeContainer>
  );
}

export default SummarizedNews;
