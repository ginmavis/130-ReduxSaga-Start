import { fork } from "redux-saga/effects";

function* watchFetchListTaskAction() {
  console.log("watching  watchFetchListTaskAction");
}
function* watchCreateTaskAction() {
  console.log("watching  function* watchCreateTaskAction");
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;
