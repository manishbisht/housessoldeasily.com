import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import user from '../redux/reducers/userReducer.js';

export default createStore(
    combineReducers({
        user
    }),
    {},
    applyMiddleware(thunk , promise())
)