import { fork, take, call, put, delay } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constants";
import { fetchListTaskFail, fetchListTaskSuccess } from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

//  B1 :  thực thi (dispatch) action fetch task
// B2 : Gọi api
// B2.1 Hiển thị thanh tiến trình
// B3 : Kiểm rea status code
//  Nếu thất bại
//  Nếu thành công
//  Tắt loading
// B4 Thực thi các công việc tiếp theo
function* watchFetchListTaskAction() {
	while (true) {
		yield take(taskTypes.FETCH_TASK); // sẽ lắng nghe và theo dõi action
		// ==========Bock===========================
		yield put(showLoading());

		// console.log("watching  watchFetchListTaskAction");
		// ==========Bock===========================

		const resp = yield call(getList);
		// ==========Bock(cho đến khi call xong)===========================
		const { status, data } = resp;
		if (status === STATUS_CODE.SUCCESS) {
			// dispatch action fetchListSucess
			yield put(fetchListTaskSuccess(data));
		} else {
			// dispatch action fetchListFailed
			yield put(fetchListTaskFail(data));
		}
		// console.log("resp : ", resp);
		yield delay(1000);
		yield put(hideLoading());
	}
}
function* watchCreateTaskAction() {
	yield "";
	//   console.log("watching  function* watchCreateTaskAction");
}

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	yield fork(watchCreateTaskAction);
}
export default rootSaga;
