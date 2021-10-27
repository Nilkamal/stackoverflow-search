import React from "react";
import QuestionList from "../../components/question-list/question-list.component";
import Search from "../../components/search/search.component";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <Search />
    <QuestionList />
  </div>
);

export default HomePage;
