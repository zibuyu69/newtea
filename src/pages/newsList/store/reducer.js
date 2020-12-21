import * as constants from "./constants";

const defaultState = {
  loading: true,
  pageInfo: {
    page: 1,
    pageSize: 10,
  },
  allData: [],

  // 首页config
  config: {},
  once: false,
};

export default (state = defaultState, action) => {
  if (action.type === constants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
