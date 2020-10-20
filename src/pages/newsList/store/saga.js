import apiUtil from "apiUtil/axios";
import { put, takeEvery } from "redux-saga/effects";
import * as constants from "./constants";
import { showErr, showSuccess } from "../../../common/tools";

// 获得所有数据
function* getAllData(action) {
  try {
    const res = yield apiUtil.getAxios(
      "/v1/content/getContentByCategory",
      action.data
    );
    if (res.data.code === 0) {
      let newPageInfo = {
        page: res.data.data.page,
        pageSize: res.data.data.pageSize,
        total: res.data.data.total,
      };
      yield put({
        type: constants.MERGE_DATA,
        payload: {
          allData: res.data.data.list,
          pageInfo: newPageInfo,
        },
      });
    } else {
      showErr(res, "/v1/content/getContentByCategory");
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* ExpenditureBudgetConfigurationSagas() {
  yield takeEvery(constants.GET_ALL_DATA, getAllData);
}
