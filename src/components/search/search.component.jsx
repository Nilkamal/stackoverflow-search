import React from "react";
import { connect } from "react-redux";
import {
  fetchQuestionListStart,
  setSearchTerm,
} from "../../redux/question/question.action";
import { createStructuredSelector } from "reselect";

import "./search.styles.scss";
import { selectSearchTerm } from "../../redux/question/question.selectors";

const Search = ({ searchTerm, setSearchTerm, fetchQuestions }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Search
    fetchQuestions(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};
const mapStateToProps = createStructuredSelector({
  searchTerm: selectSearchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (term) => dispatch(setSearchTerm(term)),
  fetchQuestions: (term) => dispatch(fetchQuestionListStart(term)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
