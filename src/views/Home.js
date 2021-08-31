import React, { useState, useEffect } from "react";

import "./Home.style/Home.desktop.css";
import "./Home.style/Home.mobile.css";

import useWindowSize from "../hooks/WindowSizeHook";
import NewsFeedMobile from "../components/Home/NewsFeed.mobile/NewsFeedMobile";
import NewsFeed from "../components/Home/NewsFeed.desktop/NewsFeed";
import { StyledButton, HomeContainer } from "../globalCSS/styledComponents";

import { CounterIncrement, CounterReset, searchTrueOrFalse } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "../components/Home/search/SearchField";

function Home() {
  const dispatch = useDispatch();
  const [, setScreenWitdh] = useState();
  const [width] = useWindowSize();
  const counter = useSelector((state) => state.CounterReducer);
  const realtimeList = useSelector((state) => state.ApiCaller);

  const error = realtimeList.error;
  console.log(error);

  useEffect(() => {
    setScreenWitdh(width);
  }, [width]);

  const Reset = () => {
    if (counter) {
      return (
        <StyledButton onClick={() => dispatch(CounterReset())}>
          Minimize
        </StyledButton>
      );
    } else {
      return null;
    }
  };

  const ReloadContent = () => {
    dispatch(searchTrueOrFalse(false));
  };

  const ErrorMessage = () => {
    return (
      <div id="errorContainer">
        <h1 id="errorHeader">{error}</h1>
        <StyledButton onClick={() => ReloadContent()}>
          Reload newsList
        </StyledButton>
      </div>
    );
  };

  return (
    <HomeContainer id="one" className="mainBG">
      <SearchField data={changeSearchField} />
      {error && ErrorMessage()}
      <Reset />
      {width <= 767 ? <NewsFeedMobile /> : <NewsFeed />}
      <StyledButton
        onClick={() => dispatch(CounterIncrement(10))}
        id="botButton"
      >
        More Articles
      </StyledButton>
      <Reset />
    </HomeContainer>
  );
}

export default Home;
