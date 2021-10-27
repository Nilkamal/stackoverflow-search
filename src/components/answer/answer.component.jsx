import React from "react";

import "./answer.styles.scss";

const Answer = ({ answer: { body, owner } }) => {
  console.log(owner);
  return (
    <div className="answer">
      <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="owner">
        <div className="answer-image-container">
          <img src={owner?.profile_image} alt="profile image" />
        </div>
        <div className="user-name">{owner?.display_name}</div>
      </div>
    </div>
  );
};

export default Answer;
