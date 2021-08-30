import React from "react";
import { useLocation } from "react-router";

import { HomeContainer, ItemSeparatorDiv } from "../globalCSS/styledComponents";
import "./SummarizedNews.style/SummarizedNews.mobile.css";

function SummarizedNews() {
  const location = useLocation();
  console.log(location);
  const newsPic = location.state.imageUrl;
  const title = location.state.title;
  const summary = location.state.summary;
  const URL = location.state.url;

  return (
    <HomeContainer id="mainContainer">
      <div id="imageContainer">
        <img src={newsPic} alt={newsPic} id="mainPicture" />
      </div>
      <ItemSeparatorDiv />
      <div id="ingress">
        <h1>{title}</h1>
      </div>
      <ItemSeparatorDiv />
      <div id="summary">{summary}</div>
      <ItemSeparatorDiv />
      <div id="articleURL">{URL}</div>
    </HomeContainer>
  );
}

export default SummarizedNews;
