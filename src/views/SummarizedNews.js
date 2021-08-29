import React from "react";
import { useLocation } from "react-router";

import "./SummarizedNews.style/SummarizedNews.css";

function SummarizedNews() {
  const location = useLocation();
  console.log(location);

  return <div></div>;
}

export default SummarizedNews;
