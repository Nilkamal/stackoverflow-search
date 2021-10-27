import AnswerActionTypes from "./answer.types";

const INITIAL_STATE = {
  answers: null,
  error: null,
  loading: false,
  question_id: null,
};
const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnswerActionTypes.FETCH_ANSWER_LIST_START:
      return { ...state, error: null, loading: true };
    case AnswerActionTypes.FETCH_ANSWER_LIST_SUCCESS:
      return { ...state, answers: action.payload, error: null, loading: false };
    case AnswerActionTypes.FETCH_ANSWER_LIST_FAILURE:
      return { ...state, answers: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default answerReducer;
