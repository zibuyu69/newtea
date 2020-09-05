import { all, fork } from "redux-saga/effects";
import * as globalSagas from "./globalStore/globalSaga";

export default function* mySaga() {
  yield all([...Object.values(globalSagas)].map(fork));
}
