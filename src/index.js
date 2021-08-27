import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// MOBILE FIRST!

// API :: https://api.spaceflightnewsapi.net/v3/documentation#/Article/
// FIRST PAGE :: TABLE LISTING LASTEST NEWS MAX 10 ARTICLES
// PAGINATE FOR NEXT 10
// NEWEST FIRST
// ALSO SHOW DATE, TITLE
// SEARCH ARTICLES BASED ON STRING - IMPLEMENT "DEBOUNCE" - AVOID FLOODING

// ARTICLE SELECTED - > NEW PAGE = SUMMARY, IMAGE, DATE, TITLE, LINK TO ACTUAL ARTICLE.

/*

*/
