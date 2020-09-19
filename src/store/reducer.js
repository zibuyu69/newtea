import { combineReducers } from "redux";
import globalReducer from "./globalStore/globalReducer";
import newListReducer from "../pages/newsList/store/reducer";

export default combineReducers({
  globalReducer,
  newListReducer,
});
