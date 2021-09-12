import createSagaMiddleware from "@redux-saga/core";

import { createStore,compose,applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import rootSaga from "./Saga/Index";


const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga)

export default store;