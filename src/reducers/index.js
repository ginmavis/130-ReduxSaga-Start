import { combineReducers } from "redux";
import taskReducers from "./task";
import uiReducer from "./ui";
import modalReducer from "./modal";
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
	task: taskReducers,
	ui: uiReducer,
	modal: modalReducer,
	form: formReducer,
});
export default rootReducer;
