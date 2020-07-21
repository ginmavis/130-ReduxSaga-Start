import axiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constants";
import qs from "query-string";
//
const url = "tasks";
export const getList = (params = {}) => {
	let queryParams = "";
	//kiểm tra  trong params có key nào hay k
	if (Object.keys(params).length > 0) {
		queryParams = `?${qs.stringify(params)}`;
	}
	return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http: //localhost : 3000/tasks METHOD:POST
export const addTaskAPI = (data) => {
	return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
