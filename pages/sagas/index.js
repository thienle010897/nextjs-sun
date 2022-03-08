import { take, takeEvery, takeLatest, 
  put, all, delay, fork, call 
} from "redux-saga/effects";
import {  loadCareersError, loadCareersSuccess, loadNewsError, loadNewsSuccess, loadProjectDetailError, loadProjectDetailSuccess, loadProjectsError, loadProjectsSuccess } from "../actions";
import * as types from '../constants';
import { loadCareersApi, loadNewsApi, loadProjectDetailApi, loadProjectsApi} from "../api"

// ----load project
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
// ----  LOAD PJ DETAIL

function* onLoadProjectDetailStartAsync (id) {
  try {
      const response = yield call(loadProjectDetailApi, id);
      if(response.status === 200) {
          yield delay(500);
          yield put(loadProjectDetailSuccess(response.data))
      }
  } catch (error) {
      yield put(loadProjectDetailError(error.response.data))
  }
  }
  
  function* onLoadProjectDetail () {
    yield takeEvery(types.LOAD_PROJECT_DETAIL_START, onLoadProjectDetailStartAsync)
  }

// --- load news

function* onLoadNewsStartAsync () {
  try {
      const response = yield call(loadNewsApi);
      if(response.status === 200) {
          yield delay(500);
          yield put(loadNewsSuccess(response.data))
      }
  } catch (error) {
      yield put(loadNewsError(error.response.data))
  }
  }
  
  function* onLoadNews () {
    yield takeEvery(types.LOAD_NEWS_START, onLoadNewsStartAsync)
  }

  // ---load careers
  function* onLoadCareersStartAsync () {
    try {
        const response = yield call(loadCareersApi);
        if(response.status === 200) {
            yield delay(500);
            yield put(loadCareersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadCareersError(error.response.data))
    }
    }
    
    function* onLoadCareers () {
      yield takeEvery(types.LOAD_CAREERS_START, onLoadCareersStartAsync)
    }

const rootSagas = [
  fork(onLoadProjects),
  fork(onLoadNews),
  fork(onLoadProjectDetail),
  fork(onLoadCareers)



]
export default function* rootSaga () {
yield all([...rootSagas]);
}
