/**  global process */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createHashHistory } from 'history';

// here we load all epics, that should get used in this application
import { epics } from './epics';

// then we load all reducer, that we need
import {
    addProductReducer,
    getProductsReducer,
    sessionReducer
} from './reducers';
 
// now we generate an application history object. This will be used by the app-container as well, so we need to export it
export const routerHistory = createHashHistory();

// and other needed middleware stuff, so we can actually compose it all
const epicMiddleware = createEpicMiddleware();

// now we generate the middleware
const middleware = compose(
    applyMiddleware(
        epicMiddleware,
        routerMiddleware(routerHistory)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// then we create the main reducer, by combining all other reducers
const mainReducer = combineReducers({
    routerAdmin: connectRouter(routerHistory),
    addProductAdmin: addProductReducer,
    getProductsAdmin: getProductsReducer,
    sessionAdmin: sessionReducer
});

const persistConfig = {
    key: 'admin-panel-meet',
    storage,
    blacklist: ['getProductsAdmin','addProductAdmin']
}

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export {
    store,
    persistor
};

// finally we start all stuff, that needs an extra start call
epicMiddleware.run(epics);