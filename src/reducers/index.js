import { combineReducers } from "redux";
import nightReducer from "./nightReducer";

export default combineReducers({
    night: nightReducer,
})