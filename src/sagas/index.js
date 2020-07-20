import {
	fork,
	take,
	call,
	put,
	delay,
	takeLatest,
	select,
	takeEvery,
} from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList, addTaskAPI } from "./../apis/task";
import { STATUS_CODE, STATUSES } from "./../constants";
import {
	fetchListTaskFail,
	fetchListTaskSuccess,
	filterTaskSuccess,
	addTaskSuccess,
	addTaskFail,
} from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";
import { hideModal } from "../actions/modal";

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
// function* watchCreateTaskAction() {
// 	yield "";
// 	//   console.log("watching  function* watchCreateTaskAction");
// }
function* filterTaskSaga({ payload }) {
	yield delay(500);
	const { keyword } = payload;
	// get list data
	// state.task.listTask : return  trong combine(task)/trong task(listtask)
	const list = yield select((state) => state.task.listTask);
	const filteredTask = list.filter((task) =>
		task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
	);
	yield put(filterTaskSuccess(filteredTask));
	// console.log("list : ", filteredTask);
	if (keyword === "") {
		const resp = yield call(getList);
		const { status, data } = resp;
		if (status === STATUS_CODE.SUCCESS) {
			yield put(fetchListTaskSuccess(data));
		}
	}
}

function* addTaskSaga({ payload }) {
	const { title, description } = payload;
	yield put(showLoading());
	const res = yield call(addTaskAPI, {
		title,
		description,
		status: STATUSES[0].value,
	});
	const { data, status } = res;
	if (status === STATUS_CODE.CREATED) {
		yield put(addTaskSuccess(data));
		yield put(hideModal());
	} else {
		yield put(addTaskFail(data));
	}
	yield delay(1000);
	yield put(hideLoading());
}

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	// yield fork(watchCreateTaskAction);
	// yield takeEvery(taskTypes.FILTER_TASK, filterTaskSaga);
	yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
	yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;
