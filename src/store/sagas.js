import { all, fork } from "redux-saga/effects";
import * as globalSagas from "./globalStore/globalSaga";
import * as newListSagas from "../pages/newsList/store/saga";
import * as UseCompanySagas from "../pages/usecompany/store/saga";
import * as CompanySagas from "../pages/company/store/saga";
import * as UseCompany1Sagas from "../pages/usecompany1/store/saga";
import * as UseCompany8Sagas from "../pages/usecompany8/store/saga";
import * as querySagas from "../pages/query/store/saga";
import * as UseCompany9Sagas from "../pages/usecompany9/store/saga";
import * as UseCompany10Sagas from "../pages/usecompany10/store/saga";

export default function* mySaga() {
  yield all([...Object.values(globalSagas)].map(fork));
  yield all([...Object.values(newListSagas)].map(fork));
  yield all([...Object.values(UseCompanySagas)].map(fork));
  yield all([...Object.values(CompanySagas)].map(fork));
  yield all([...Object.values(UseCompany1Sagas)].map(fork));
  yield all([...Object.values(UseCompany8Sagas)].map(fork));
  yield all([...Object.values(querySagas)].map(fork));
  yield all([...Object.values(UseCompany9Sagas)].map(fork));
  yield all([...Object.values(UseCompany10Sagas)].map(fork));
}
