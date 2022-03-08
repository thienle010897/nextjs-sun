import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleWare.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga)
export default store;
