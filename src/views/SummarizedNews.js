import React from "react";
import { useLocation } from "react-router";

import { HomeContainer } from "../globalCSS/styledComponents";
import "./SummarizedNews.style/SummarizedNews.mobile.css";

function SummarizedNews() {
  const location = useLocation();
  console.log(location);

  return <HomeContainer id="mainContainer"></HomeContainer>;
}

export default SummarizedNews;
