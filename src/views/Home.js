import React, { useState, useEffect } from "react";

import "./Home.style/Home.desktop.css";
import "./Home.style/Home.mobile.css";

import useWindowSize from "../hooks/WindowSizeHook";
import NewsFeedMobile from "../components/Home/NewsFeed.mobile/NewsFeedMobile";
import NewsFeed from "../components/Home/NewsFeed.desktop/NewsFeed";
import { StyledButton, HomeContainer } from "../globalCSS/styledComponents";

import { CounterIncrement, resetList } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "../components/Home/search/SearchField";

function Home() {
  const dispatch = useDispatch();
  const [, setScreenWitdh] = useState();
  const [width] = useWindowSize();
  const realtimeList = useSelector((state) => state.ApiCaller);
  const isSearchActive = realtimeList.searchIsActive;
  console.log("search: ", isSearchActive);

  const error = realtimeList.error;
  console.log(realtimeList);

  useEffect(() => {
    setScreenWitdh(width);
  }, [width]);

  const ReloadContent = () => {
    dispatch(resetList());
  };

  const Reset = () => {
    if (realtimeList.articles.length > 10 || isSearchActive === true) {
      return (
        <StyledButton onClick={() => ReloadContent()}>
          Restore original list
        </StyledButton>
      );
    } else {
      return null;
    }
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
      <SearchField />
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
