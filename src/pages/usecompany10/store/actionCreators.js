import * as constants from "./constants";
// 合并数据
export const mergeData = (data) => ({
  type: constants.MERGE_DATA,
  data,
});

export const getAll = (data) => ({
  type: constants.GET_ALL,
  data,
});
