import { combineReducers } from "redux";
import globalReducer from "./globalStore/globalReducer";
import newListReducer from "../pages/newsList/store/reducer";
import UseCompanyReducer from "../pages/usecompany/store/reducer";
import CompanyReducer from "../pages/company/store/reducer";
import UseCompany1Reducer from "../pages/usecompany1/store/reducer";
import UseCompany8Reducer from "../pages/usecompany8/store/reducer";
import queryReducer from "../pages/query/store/reducer";
import UseCompany9Reducer from "../pages/usecompany9/store/reducer";
import UseCompany10Reducer from "../pages/usecompany10/store/reducer";

export default combineReducers({
  globalReducer,
  newListReducer,
  UseCompanyReducer,
  CompanyReducer,
  UseCompany1Reducer,
  UseCompany8Reducer,
  queryReducer,
  UseCompany9Reducer,
  UseCompany10Reducer,
});
