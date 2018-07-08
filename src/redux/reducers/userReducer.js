import {createReducer} from 'redux-create-reducer'
import cookie from 'react-cookies'

const initialState = {
    id: '',
    error: '',
};

export default createReducer(initialState, {
    ['CREATE_ACCOUNT' + '_FULFILLED'](state, action) {
        if(action.payload.response.code === 11000) {
            return {
                ...state,
                error: 'This account already exists !!'
            }
        } else {
            cookie.save('userId', action.payload.response._id);
            return {
                ...state,
                id: action.payload.response._id,
                error: ''
            }
        }
    },
    ['IS_ACCOUNT_VALID' + '_FULFILLED'](state, action) {
        if(action.payload.response.length === 1) {
            cookie.save('userId', action.payload.response[0]._id);
            return {
                ...state,
                id: action.payload.response[0]._id,
                error: ''
            }
        } else {
            return {
                ...state,
                error: 'Invalid Email/Password'
            }
        }
    },
    ['CONTINUE_ACCOUNT_LOGIN'](state, action) {
        return {
            ...state,
            id: action.payload.userId,
            error: '',
        }
    },
    ['ACCOUNT_LOGOUT'](state, action) {
        cookie.remove('userId');
        return {
            ...state,
            id: '',
            error: '',
        }
    },
});