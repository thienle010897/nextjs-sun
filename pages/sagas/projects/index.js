import { take, takeEvery, takeLatest, 
    put, all, delay, fork, call 
  } from "redux-saga/effects";
import {  loadProjectsError, loadProjectsSuccess } from "../../actions";
import * as ActionTypes from '../../constants';
import { loadProjectsApi} from "../../api"

function* onLoadProjectsStartAsync () {
  try {
      const response = yield call(loadProjectsApi);
      if(response.status === 200) {
          yield delay(500);
          yield put(loadProjectsSuccess(response.data))
      }
  } catch (error) {
      yield put(loadProjectsError(error.response.data))
  }
}

function* onLoadProjects () {
    yield takeEvery(types.LOAD_PROJECTS_START, onLoadProjectsStartAsync)
}


const projectsSaga = [
  fork(onLoadProjects)
]
export default function* projectsSagas () {
  yield all([...projectsSaga]);
}