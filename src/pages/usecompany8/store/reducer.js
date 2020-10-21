import * as constants from "./constants";

const defaultState = {
  allData: [],
};

export default (state = defaultState, action) => {
  if (action.type === constants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
