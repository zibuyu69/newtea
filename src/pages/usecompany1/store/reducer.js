import * as constants from "./constants";

const defaultState = {
  allData: [
    { id: 1, name: "11111福建省天湖茶业有限公司" },
    { id: 2, name: "福建省广福茶业有限责任公司" },
    { id: 3, name: "六妙白茶股份有限公司" },
    { id: 4, name: "福建誉达茶业有限公司" },
    { id: 5, name: "福建广林福茶业有限责任公司" },
    { id: 6, name: "福鼎市天健茶业有限公司" },
  ],
};

export default (state = defaultState, action) => {
  if (action.type === constants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
