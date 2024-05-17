import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";

import {
  GlobalStyle,
  MainContainer,
  Title,
  Description,
  Developer,
} from "./styledComponents";

const App = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Header />
      <Title>Think &lt;Code&gt; Innovate</Title>
      <Description>Make it work, Make it right, Make it fast</Description>
      <Developer
        href="https://www.linkedin.com/in/saichandanyadav/"
        target="_blank"
      >
        Follow the Developer
      </Developer>
      <Leaderboard />
    </MainContainer>
  </>
);

export default App;
