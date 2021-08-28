import React, { useState, useEffect } from "react";
import "./Home.style/Home.mobile.css";

import useWindowSize from "../hooks/WindowSizeHook";
import NewsFeedMobile from "../components/Home/NewsFeed.mobile/NewsFeedMobile";
import NewsFeed from "../components/Home/NewsFeed/NewsFeed";
import Button from "react-bootstrap/Button";
import { HomeContainer } from "./Home.style/Styled.Home";

function Home() {
  const [counter, setCounter] = useState(0);
  const [screenWidth, setScreenWitdh] = useState();
  const [width] = useWindowSize();

  useEffect(() => {
    setScreenWitdh(width);
  }, [width]);

  const Reset = () => {
    if (counter) {
      return <Button onClick={() => setCounter(0)}>Reset</Button>;
    } else {
      return null;
    }
  };

  return (
    <HomeContainer id="one" className="mainBG">
      <Reset />
      {width < 600 ? (
        <NewsFeedMobile counter={counter} />
      ) : (
        <NewsFeed counter={counter} />
      )}
      <Button onClick={() => setCounter(counter + 10)}>Click me</Button>
    </HomeContainer>
  );
}

export default Home;
