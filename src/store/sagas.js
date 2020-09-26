import { all, fork } from "redux-saga/effects";
import * as globalSagas from "./globalStore/globalSaga";
import * as newListSagas from "../pages/newsList/store/saga";
import * as UseCompanySagas from "../pages/usecompany/store/saga";
import * as CompanySagas from "../pages/company/store/saga";

export default function* mySaga() {
  yield all([...Object.values(globalSagas)].map(fork));
  yield all([...Object.values(newListSagas)].map(fork));
  yield all([...Object.values(UseCompanySagas)].map(fork));
  yield all([...Object.values(CompanySagas)].map(fork));
}
