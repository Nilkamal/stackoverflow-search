import AnswerActionTypes from "./answer.types";
import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchAnswerListStart = (question_id) => {
  return function (dispatch) {
    dispatch({ type: AnswerActionTypes.FETCH_ANSWER_LIST_START });
    // https://api.stackexchange.com/2.3/questions/34641582/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody
    return axios
      .get(
        `${BASE_URL}/questions/${question_id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`
      )
      .then(({ data }) => {
        dispatch(fetchAnswerListSuccess(data.items));
      })
      .catch((error) => {
        dispatch(fetchAnswerListFailure(error));
      });
  };
};

export const fetchAnswerListSuccess = (answers) => ({
  type: AnswerActionTypes.FETCH_ANSWER_LIST_SUCCESS,
  payload: answers,
});

export const fetchAnswerListFailure = (error) => ({
  type: AnswerActionTypes.FETCH_ANSWER_LIST_FAILURE,
  payload: error,
});
