import * as taskConstants from "./../constants/task";
import { STATUSES } from "./../constants/index";

export const fetchListTask = (params = {}) => {
	return {
		type: taskConstants.FETCH_TASK,
		payload: {
			params,
		},
	};
};

export const fetchListTaskSuccess = (data) => {
	return {
		type: taskConstants.FETCH_TASK_SUCCESS,
		payload: {
			data,
		},
	};
};

export const fetchListTaskFail = (error) => {
	return {
		type: taskConstants.FETCH_TASK_FAILED,
		payload: {
			error,
		},
	};
};

// ({}): thay cho { return}

export const filterTask = (keyword) => ({
	type: taskConstants.FILTER_TASK,
	payload: {
		keyword,
	},
});
export const filterTaskSuccess = (data) => ({
	type: taskConstants.FILTER_TASK_SUCCESS,
	payload: {
		data,
	},
});

export const addTask = (title, description) => {
	return {
		type: taskConstants.ADD_TASK,
		payload: {
			title,
			description,
		},
	};
};

export const addTaskSuccess = (data) => {
	return {
		type: taskConstants.ADD_TASK_SUCCESS,
		payload: {
			data,
		},
	};
};

export const addTaskFail = (error) => {
	return {
		type: taskConstants.ADD_TASK_FAILED,
		payload: {
			error,
		},
	};
};

export const setTaskEditing = (task) => {
	return {
		type: taskConstants.SET_TASK_EDITING,
		payload: {
			task,
		},
	};
};

//  update
export const updateTask = (title, description, status = STATUSES[0].value) => {
	return {
		type: taskConstants.UPDATE_TASK,
		payload: {
			title,
			description,
			status,
		},
	};
};

export const updateTaskSuccess = (data) => {
	return {
		type: taskConstants.UPDATE_TASK_SUCCESS,
		payload: {
			data,
		},
	};
};

export const updateTaskFailed = (error) => {
	return {
		type: taskConstants.UPDATE_TASK_FAILED,
		payload: {
			error,
		},
	};
};
