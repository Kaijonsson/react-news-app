import React, { useState } from "react";
import "./Home.mobile.css";
import globalStyles from "../globalCSS/globalStyles";
import styled from "styled-components";
import NewsFeed from "../components/NewsFeed";

const HomeContainer = styled.div`
  background: ${globalStyles.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <HomeContainer id="one" className="mainBG">
      <NewsFeed counter={counter} />
      <button onClick={() => setCounter(counter + 10)}>Click me</button>
    </HomeContainer>
  );
}

export default Home;
