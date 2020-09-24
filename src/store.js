import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import { createHashHistory } from 'history';

import { epics } from './epics';
import { addProductReducer, getProductsReducer } from './reducers';
 
export const routerHistory = createHashHistory();

const epicMiddleware = createEpicMiddleware();

const middleware = compose(
    applyMiddleware(
        epicMiddleware,
        routerMiddleware(routerHistory)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const mainReducer = combineReducers({
    router: connectRouter(routerHistory),
    addProduct: addProductReducer,
    getProducts: getProductsReducer 
});

const persistConfig = {
    key: 'application',
    storage,
    blacklist: ['']
}

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export {
    store,
    persistor
};

epicMiddleware.run(epics);