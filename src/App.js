import Home from "./Home";
import CommitFeed from "./CommitFeed";
import DoesNotExist from "./DoesNotExist";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  text-align: center;
  background-color: #f8f9fd;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Roboto", sans-serif;
  > * {
    box-sizing: border-box;
  }
`;

const Header = styled.h1`
  color: #34495e;
  margin-top: 50px;
  font-size: 25px;
`;

function App() {
  return (
    <Router>
      <Body className="App">
        <Header>Commit Feed</Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/does/not/exist" exact component={DoesNotExist} />
          <Route path="/:username/:repo" exact component={CommitFeed} />
          <Redirect to="/does/not/exist" />
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
