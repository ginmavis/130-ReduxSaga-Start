import axios from "axios";
class AxiosService {
	constructor() {
		const instance = axios.create();
		instance.interceptors.response.use(
			this.handleSuccess,
			this.handleError
		);
		// tạo ra biến chứa instance
		this.instance = instance;
	}
	handleSuccess(res) {
		return res;
	}
	handleError(error) {
		return Promise.reject(error);
	}
	get(url) {
		return this.instance.get(url);
	}
}

export default new AxiosService();
