import { combineReducers } from "redux";
import globalReducer from "./globalStore/globalReducer";
import newListReducer from "../pages/newsList/store/reducer";
import UseCompanyReducer from "../pages/usecompany/store/reducer";
import CompanyReducer from "../pages/company/store/reducer";

export default combineReducers({
  globalReducer,
  newListReducer,
  UseCompanyReducer,
  CompanyReducer,
});
