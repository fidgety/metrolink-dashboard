import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import restMiddlewareCreator from 'redux-fetch-middleware';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import today from '../reducers/today';

const globalRestOptions = {
    suffix: ['REQUEST', 'SUCCESS', 'FAILURE'],

    fetchOptions: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
};

const restMiddleware = restMiddlewareCreator(globalRestOptions);

const reducers = combineReducers({
    today,
    routing: routerReducer
});

const createStoreWithMiddleware = applyMiddleware(
    restMiddleware,
    thunkMiddleware,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
