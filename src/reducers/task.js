import * as taskConstants from "./../constants/task";
import { toastError, toastSuccess } from "../helpers/toastHelper";

const initialState = {
	listTask: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case taskConstants.FETCH_TASK: {
			return { ...state, listTask: [] };
		}
		case taskConstants.FETCH_TASK_SUCCESS: {
			const { data } = action.payload;
			toastSuccess("Connect Success");
			return { ...state, listTask: data };
		}
		case taskConstants.FETCH_TASK_FAILED: {
			const { error } = action.payload;
			toastError(error);
			return { ...state, listTask: [] };
		}
		case taskConstants.FILTER_TASK_SUCCESS: {
			const { data } = action.payload;
			return { ...state, listTask: data };
		}

		case taskConstants.ADD_TASK:
			return {
				...state,
			};
		case taskConstants.ADD_TASK_SUCCESS: {
			const { data } = action.payload;
			return {
				...state,
				// nối cái data mới với mảng cũ (nối lên đầu)
				listTask: [data].concat(state.listTask),
				// nối cái data mới với mảng cũ (nối vào cuối)

				// listTask: state.listTask.concat([data]);
			};
		}
		case taskConstants.ADD_TASK_FAILED:
			const { error } = action.payload;
			toastError(error);
			return {
				...state,
			};

		default:
			return state;
	}
};
export default reducer;
