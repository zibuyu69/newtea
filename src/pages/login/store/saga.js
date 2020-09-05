import apiUtil from "apiUtil/axios";
import { put, takeEvery } from "redux-saga/effects";
import * as constants from "./constants";
// import { showErr, showSuccess } from "../../../common/tools";

// 获得所有数据
function* getAllData(action) {
  /*   try {
    const res = yield apiUtil.getAxios(
      "/projectBudgetItem/getProjectBudgetInfo"
    );
    if (res.data.code === 10000) {
      yield put({
        type: constants.MERGE_DATA,
        payload: {
          allData: res.data.data.list,
          title: res.data.data.title,
         }
      });
    } else {
      showErr(res, "/projectBudgetItem/getProjectBudgetInfo");
    }
  } catch (error) {
     console.error(error);
  } */
}

export default function* ExpenditureBudgetConfigurationSagas() {
  // yield takeEvery(constants.GET_ALL_DATA, getAllData);
}
