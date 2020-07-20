import axiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constants";

//
const url = "tasks";
export const getList = () => {
	return axiosService.get(`${API_ENDPOINT}/${url}`);
};

// http: //localhost : 3000/tasks METHOD:POST
export const addTaskAPI = (data) => {
	return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
