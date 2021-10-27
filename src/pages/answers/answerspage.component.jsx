import React, { useEffect } from "react";
import AnswerList from "../../components/answer-list/answer-list.component";
import { connect } from "react-redux";
import { fetchAnswerListStart } from "../../redux/answer/answer.action";

import "./answerspage.styles.scss";
import { createStructuredSelector } from "reselect";

const AnswersPage = ({ fetchAnswers, match }) => {
  const { question_id } = match.params;
  useEffect(() => {
    fetchAnswers(question_id);
  }, []);

  return (
    <div className="answers-page">
      <AnswerList />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
  fetchAnswers: (question_id) => dispatch(fetchAnswerListStart(question_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AnswersPage);
