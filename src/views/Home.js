import React, { useState, useEffect } from "react";

import useWindowSize from "../hooks/WindowSizeHook";
import NewsFeedMobile from "../components/Home/NewsFeed.mobile/NewsFeedMobile";
import NewsFeed from "../components/Home/NewsFeed.desktop/NewsFeed";
import { StyledButton, HomeContainer } from "../globalCSS/styledComponents";

import { CounterIncrement, CounterReset } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [, setScreenWitdh] = useState();
  const [width] = useWindowSize();
  const counter = useSelector((state) => state.CounterReducer);

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

  return (
    <HomeContainer id="one" className="mainBG">
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
