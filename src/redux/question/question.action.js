import QuestionActionTypes from "./question.types";
import { BASE_URL } from "../constants";
import axios from "axios";

export const setSearchTerm = (term) => ({
  type: QuestionActionTypes.SET_SEARCH_TERM,
  payload: term,
});

export const fetchQuestionListStart = (searchTerm) => {
  return function (dispatch) {
    dispatch({ type: QuestionActionTypes.FETCH_QUESTION_LIST_START });
    // https://api.stackexchange.com/2.3/questions/34641582/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody
    return axios
      .get(
        `${BASE_URL}/search/advanced?site=stackoverflow.com&q=${searchTerm}&filter=withbody`
      )
      .then(({ data }) => {
        dispatch(fetchQuestionListSuccess(data.items));
      })
      .catch((error) => {
        dispatch(fetchQuestionListFailure(error));
      });
  };
};

const fetchQuestionListSuccess = (questions) => ({
  type: QuestionActionTypes.FETCH_QUESTION_LIST_SUCCESS,
  payload: questions,
});

const fetchQuestionListFailure = (error) => ({
  type: QuestionActionTypes.FETCH_QUESTION_LIST_FAILURE,
  payload: error,
});
