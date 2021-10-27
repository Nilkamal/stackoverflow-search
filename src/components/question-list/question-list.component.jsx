import React from "react";
import Question from "../question/question.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectQuestions,
  selectQuestionsCount,
  selectSearchTerm,
} from "../../redux/question/question.selectors";
import "./question-list.styles.scss";

const QuestionList = ({ questions, totalQuestions, searchTerm }) => {
  return (
    <div className="question-list">
      {totalQuestions !== 0 && searchTerm ? (
        questions?.map((question) => (
          <Question key={question.question_id} question={question} />
        ))
      ) : (
        <div className="empty">
          {searchTerm && <span>No question found!</span>}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestions,
  totalQuestions: selectQuestionsCount,
  searchTerm: selectSearchTerm,
});

export default connect(mapStateToProps, null)(QuestionList);
