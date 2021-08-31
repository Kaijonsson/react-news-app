import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
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
