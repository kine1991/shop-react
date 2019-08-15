import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

// export const store = createStore(rootReducer);