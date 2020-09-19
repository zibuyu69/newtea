import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as globalConstants from "./globalConstants";
import * as globalActionCreators from "./globalActionCreators";
import apiUtil from "apiUtil/axios";
import { showErr, showSuccess } from "../../common/tools";

/* axios.defaults.withCredentials = true; */

// 获取是否有后台管理权限
function* getPermission(action) {
  try {
    const res = yield apiUtil.getAxios(
      "/permissionApi/permission/role/hasSystemRole",
      action.data
    );

    if (res.data.code === 10000) {
      yield put({
        type: globalConstants.MERGE_DATA,
        payload: {
          hasPermission: res.data.data,
        },
      });
    } else {
      showErr(res, "/permissionApi/permission/role/hasSystemRole");
    }
  } catch (error) {
    console.error(error);
  }
}
// 获得菜单
function* getMenu(action) {
  try {
    const res = yield apiUtil.getAxios(
      "/permissionApi/permission/menu/getMenuTreeBySystem",
      action.data
    );

    if (res.data.code === 10000) {
      yield put({
        type: globalConstants.MERGE_DATA,
        payload: {
          menu: res.data.data,
        },
      });
    } else {
      showErr(res, "/permissionApi/permission/menu/getMenuTreeBySystem");
    }
  } catch (error) {
    console.error(error);
  }
}
// 获得按钮
function* getButton(action) {
  try {
    const res = yield apiUtil.getAxios(
      "/permissionApi/permission/menu/getMenuFunction",
      action.data
    );

    if (res.data.code === 10000) {
      yield put({
        type: globalConstants.MERGE_DATA,
        payload: {
          button: res.data.data,
        },
      });
    } else {
      showErr(res, "/permissionApi/permission/menu/getMenuFunction");
    }
  } catch (error) {
    console.error(error);
  }
}
// 获得菜单树
function* getMenuTree(action) {
  try {
    const res = yield apiUtil.getAxios(
      "/permissionApi/permission/menu/getMenuTreeBySystem",
      action.data
    );

    if (res.data.code === 10000) {
      yield put({
        type: globalConstants.MERGE_DATA,
        payload: {
          menuTree: res.data.data,
        },
      });
    } else {
      showErr(res, "/permissionApi/permission/menu/getMenuTreeBySystem");
    }
  } catch (error) {
    console.error(error);
  }
}
export default function* globalSagas() {
  yield takeEvery(globalConstants.GET_PERMISSION, getPermission);
  yield takeEvery(globalConstants.GET_MENU, getMenu);
  yield takeEvery(globalConstants.GET_BUTTON, getButton);
  yield takeEvery(globalConstants.GET_MENU_TREE, getMenuTree);
}
