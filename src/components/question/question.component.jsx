import React from "react";
import { Link } from "react-router-dom";

import "./question.styles.scss";

const Question = ({ question }) => {
  const {
    title,
    answer_count,
    score,
    body,
    tags,
    creation_date,
    question_id,
    owner: { display_name },
  } = question;
  return (
    <div className="question">
      <div className="stats-container">
        <div className="stats">
          <div className="votes">
            <div className="vote-count">
              <strong>{score}</strong>
            </div>
            <div className="vote-title">Votes</div>
          </div>
          <div className="answers">
            <div className="answer-count">
              <strong>{answer_count}</strong>
            </div>
            <div className="answer-title">answers</div>
          </div>
        </div>
      </div>
      <div className="main-question">
        <div className="question-title">
          <Link to={`/questions/${question_id}`}>
            <h3>Q: {title}</h3>
          </Link>
        </div>
        <div
          className="question-body"
          dangerouslySetInnerHTML={{ __html: body.substring(0, 100) + "..." }}
        />

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="author">
          <span className="title">Asked by</span>
          <span className="name">{display_name}</span>
        </div>
      </div>
    </div>
  );
};

export default Question;
