import { fork, take, call } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constants";

function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK); // sẽ lắng nghe và theo dõi action
  // ==========Bock===========================
  // khi nào dispatch  taskTypes.FETCH_TASK thì mới đc thực thi các câu leemjk dưới
  // console.log("watching  watchFetchListTaskAction");
  // ==========Bock===========================

  const resp = yield call(getList);
  // ==========Bock(cho đến khi call xong)===========================
  const { sastus, data } = resp;
  if (sastus === STATUS_CODE.SUCCESS) {
    // dispatch action fetchListSucess
  } else {
    // dispatch action fetchListFailed
  }
  console.log("resp : ", resp);
}
function* watchCreateTaskAction() {
  yield "";
  console.log("watching  function* watchCreateTaskAction");
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;
