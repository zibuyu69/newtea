import * as constants from "./constants";

const defaultState = {
  loading: true,
  pageInfo: {
    page: 1,
    pageSize: 2,
  },
  allData: [],
};

export default (state = defaultState, action) => {
  if (action.type === constants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
