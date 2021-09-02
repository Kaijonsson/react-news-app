import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SummarizedNews from "./views/SummarizedNews";

import { useDispatch, useSelector } from "react-redux";
import { fetchApi, CounterIncrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.CounterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (counter === 0) {
      fetch("https://api.spaceflightnewsapi.net/v3/articles")
        .then((response) => response.json())
        .then(
          (data) => dispatch(fetchApi(data)),
          dispatch(CounterIncrement(1))
        );
    }
  }, []);

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
