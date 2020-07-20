import { combineReducers } from "redux";
import taskReducers from "./task";
import uiReducer from "./ui";
import modalReducer from "./modal";
const rootReducer = combineReducers({
	task: taskReducers,
	ui: uiReducer,
	modal: modalReducer,
});
export default rootReducer;
