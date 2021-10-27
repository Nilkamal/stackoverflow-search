import QuestionActionTypes from "./question.types";

const INITIAL_STATE = {
  searchTerm: "",
  questions: null,
  error: null,
  loading: false,
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case QuestionActionTypes.FETCH_QUESTION_LIST_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case QuestionActionTypes.FETCH_QUESTION_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        questions: action.payload,
      };

    case QuestionActionTypes.FETCH_QUESTION_LIST_FAILURE:
      return {
        ...state,
        questions: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
