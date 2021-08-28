import React, { useState } from "react";
import "./Home.style/Home.mobile.css";

import NewsFeed from "../components/Home/NewsFeed";
import Button from "react-bootstrap/Button";
import { HomeContainer } from "./Home.style/Styled.Home";

function Home() {
  const [counter, setCounter] = useState(0);

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
      <NewsFeed counter={counter} />
      <Button onClick={() => setCounter(counter + 10)}>Click me</Button>
    </HomeContainer>
  );
}

export default Home;
