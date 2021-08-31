import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SummarizedNews from "./views/SummarizedNews";

import { useDispatch, useSelector } from "react-redux";
import { fetchApi, resetList } from "./actions";

function App() {
  const watcher = useSelector((state) => state.CounterReducer);
  const realtimeList = useSelector((state) => state.ApiCaller);
  const dispatch = useDispatch();

  useEffect(() => {
    if (realtimeList.searchIsActive === true) {
      console.log(realtimeList.searchIsActive);
      return;
    }
    if (watcher === 0 && realtimeList.articles.length > 0) {
      const reloadList = async () => {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        const data = await response.json();
        if (data) {
          dispatch(resetList(data));
        }
      };
      reloadList();
    }

    if (watcher === 0) {
      const loadApi = async () => {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        const data = await response.json();
        if (data) {
          dispatch(fetchApi(data));
        }
      };
      loadApi();
    }
  }, [
    realtimeList.searchIsActive,
    watcher,
    dispatch,
    realtimeList.articles.length,
  ]);

  return (
    <div>
      <Switch>
        <Route path="/summarizedNews">
          <SummarizedNews />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
