import { all, fork } from "redux-saga/effects";
import * as globalSagas from "./globalStore/globalSaga";
import * as newListSagas from "../pages/newsList/store/saga";

export default function* mySaga() {
  yield all([...Object.values(globalSagas)].map(fork));
  yield all([...Object.values(newListSagas)].map(fork));
}
