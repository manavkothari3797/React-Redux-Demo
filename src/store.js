import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const history = createBrowserHistory();
const middlewares = [thunkMiddleware, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducers());

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, history, persistor };
