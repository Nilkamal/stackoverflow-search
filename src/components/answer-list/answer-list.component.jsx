import React from "react";
import Answer from "../answer/answer.component";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import "./answer-list.styles.scss";
import { selectAnswers } from "../../redux/answer/answer.selector";
import { selectQuestions } from "../../redux/question/question.selectors";

const AnswerList = ({ answers, ...otherProps }) => {
  console.log(answers);
  const { question_id } = otherProps.match.params;
  const question = otherProps.questions.find(
    (question) => question.question_id == question_id
  );
  console.log(question);
  return (
    <div className="answer-list">
      <div className="question">
        <h2 className="title">{question?.title}</h2>
      </div>
      {answers?.length ? (
        answers.map((answer) => (
          <Answer key={answer.answer_id} answer={answer} />
        ))
      ) : (
        <span className="empty">No Answers found!</span>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  answers: selectAnswers,
  questions: selectQuestions,
});

export default withRouter(connect(mapStateToProps)(AnswerList));
