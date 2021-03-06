import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
