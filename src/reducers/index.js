import { combineReducers } from "redux";
import taskReducers from "./task";

const rootReducer = combineReducers({
	task: taskReducers,
});
export default rootReducer;
