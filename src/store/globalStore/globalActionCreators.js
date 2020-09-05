import * as constants from "./globalConstants";
// 合并数据
export const mergeData = data => ({
  type: constants.MERGE_DATA,
  data
});

// 获取是否有后台管理权限
export const getPermission = data => ({
  type: constants.GET_PERMISSION,
  data
});
// 获得菜单
export const getMenu = data => ({
  type: constants.GET_MENU,
  data
});
// 获得按钮
export const getButton = data => ({
  type: constants.GET_BUTTON,
  data
});
// 获得菜单树
export const getMenuTree = data => ({
  type: constants.GET_MENU_TREE,
  data
});
