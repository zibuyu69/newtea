import apiUtil from "apiUtil/axios";
import { put, takeEvery } from "redux-saga/effects";
import * as constants from "./constants";
import { showErr, showSuccess } from "../../../common/tools";

// 获得所有数据
function* getAll(action) {
  try {
    const res = yield apiUtil.getAxios(
      "/origin/companyinfo/findAl",
      action.data
    );
    if (res.data.code === 10000) {
      yield put({
        type: constants.MERGE_DATA,
        payload: {
          allData: res.data.data.list,
        },
      });
    } else {
      showErr(res, "/origin/companyinfo/findAl");
    }
  } catch (error) {
    console.error(error);
  }
}
// 获得所有数据
function* toSubmit(action) {
  showSuccess("提交成功！");

  try {
    const res = yield apiUtil.getAxios(
      "/origin/companyinfo/findAl",
      action.data
    );
    if (res.data.code === 10000) {
      yield put({
        type: constants.MERGE_DATA,
        payload: {
          allData: res.data.data.list,
        },
      });
      showSuccess("提交成功！");
    } else {
      showErr(res, "/origin/companyinfo/findAl");
    }
  } catch (error) {
    console.error(error);
  }
}
export default function* ExpenditureBudgetConfigurationSagas() {
  yield takeEvery(constants.GET_ALL, getAll);
  yield takeEvery(constants.TO_SUBMIT, toSubmit);
}
