import { createSelector } from "reselect";

export const selectQuestion = (state) => state.question;

export const selectQuestions = createSelector(
  [selectQuestion],
  (question) => question.questions
);

export const selectSearchTerm = createSelector(
  [selectQuestion],
  (question) => question.searchTerm
);

export const selectQuestionsCount = createSelector(
  [selectQuestions],
  (questions) => questions?.length
);
