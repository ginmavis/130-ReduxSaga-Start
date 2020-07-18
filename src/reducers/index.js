import { combineReducers } from "redux";
import taskReducers from "./task";
import uiReducer from "./ui";
const rootReducer = combineReducers({
	task: taskReducers,
	ui: uiReducer,
});
export default rootReducer;
