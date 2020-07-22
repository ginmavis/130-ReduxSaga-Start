import * as taskConstants from "./../constants/task";
import { toastError, toastSuccess } from "../helpers/toastHelper";

const initialState = {
	listTask: [],
	taskEditing: null,
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
			toastSuccess("Add Job Success");
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

		case taskConstants.SET_TASK_EDITING: {
			const { task } = action.payload;
			return {
				...state,
				taskEditing: task,
			};
		}

		case taskConstants.UPDATE_TASK: {
			return {
				...state,
			};
		}
		case taskConstants.UPDATE_TASK_SUCCESS: {
			const { data } = action.payload;
			const { listTask } = state;
			const index = listTask.findIndex((item) => item.id === data.id);
			if (index !== -1) {
				const newList = [
					...listTask.slice(0, index), // nối  phần tử từ 0 đến index
					data, // thay thế phần index
					...listTask.slice(index + 1), // nối phần cắt từ index +1
					//  ta được new list mới với data đc cập nhâtj
				];
				toastSuccess("Cập nhật công việc thành công");
				return { ...state, listTask: newList };
			}
			return { ...state };
		}

		default:
			return state;
	}
};
export default reducer;
