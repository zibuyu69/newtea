import * as constants from "./constants";

const defaultState = {
  loading: true,
  allData: {},
};

export default (state = defaultState, action) => {
  if (action.type === constants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
