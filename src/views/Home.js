import React, { useState, useEffect } from "react";
import "./Home.style/Home.mobile.css";

import useWindowSize from "../hooks/WindowSizeHook";
import NewsFeedMobile from "../components/Home/NewsFeed.mobile/NewsFeedMobile";
import NewsFeed from "../components/Home/NewsFeed/NewsFeed";
import { HomeContainer, StyledButton } from "./Home.style/Styled.Home";

function Home() {
  const [counter, setCounter] = useState(0);
  const [, setScreenWitdh] = useState();
  const [width] = useWindowSize();

  useEffect(() => {
    setScreenWitdh(width);
  }, [width]);

  const Reset = () => {
    if (counter) {
      return (
        <StyledButton onClick={() => setCounter(0)}>Minimize</StyledButton>
      );
    } else {
      return null;
    }
  };

  return (
    <HomeContainer id="one" className="mainBG">
      <Reset />
      {width <= 767 ? (
        <NewsFeedMobile counter={counter} />
      ) : (
        <NewsFeed counter={counter} />
      )}
      <StyledButton onClick={() => setCounter(counter + 10)} id="botButton">
        More Articles
      </StyledButton>
      <Reset />
    </HomeContainer>
  );
}

export default Home;
