import { createSelector } from "reselect";

const selectAnswer = (state) => state.answer;

export const selectAnswers = createSelector([selectAnswer], (answer) => {
  return answer.answers;
});
