import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SummarizedNews from "./views/SummarizedNews";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/summarizedNews">
          <SummarizedNews />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
