import * as globalConstants from "./globalConstants";

const defaultState = {
  hasPermission: false,
  menuTree: [],
  token: "",
  // 工作区菜单打开哪一组
  openKeys: ""
};

export default (state = defaultState, action) => {
  if (action.type === globalConstants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
