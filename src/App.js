import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/sprites.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import AnswersPage from "./pages/answers/answerspage.component";
import Toggle from "./components/toggle/toggle.component";

function App() {
  return (
    <div className="App">
      <div className="toggle">
        <Toggle />
      </div>
      <div className="image-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/questions/:question_id" component={AnswersPage} />
      </Switch>
    </div>
  );
}

export default App;
