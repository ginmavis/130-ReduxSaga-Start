// import * as taskApis from "./../apis/task";
import * as taskConstants from "./../constants/task";
export const fetchListTask = () => {
	return {
		type: taskConstants.FETCH_TASK,
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

// export const fetchListTaskRequest = () => {
// 	return (dispatch) => {
// 		dispatch(fetchListTask());
// 		taskApis
// 			.getList()
// 			.then((res) => {
// 				const { data } = res;
// 				dispatch(fetchListTaskSuccess(data));
// 			})
// 			.catch((error) => {
// 				dispatch(fetchListTaskFail(error));
// 			});
// 	};
// };

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
