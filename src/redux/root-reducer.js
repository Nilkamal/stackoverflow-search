import { combineReducers } from "redux";
import answerReducer from "./answer/answer.reducer";
import questionReducer from "./question/question.reducer";

export default combineReducers({
  question: questionReducer,
  answer: answerReducer,
});
