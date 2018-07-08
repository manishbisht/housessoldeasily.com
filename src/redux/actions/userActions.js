import API from '../../utils/api'

export function createAccount(data, state) {
    return (dispatch) => {
        dispatch({
            type: 'CREATE_ACCOUNT',
            payload: API.createAccount(data).then((response) => {
                return {response, data, state}
            })
        });
    };
}

export function isAccountValid(data, state) {
    return (dispatch) => {
        dispatch({
            type: 'IS_ACCOUNT_VALID',
            payload: API.isAccountValid(data).then((response) => {
                return {response, data, state}
            })
        });
    };
}

export function continueLogin(data, state) {
    return {
        type: 'CONTINUE_ACCOUNT_LOGIN',
        payload: data
    }
}

export function logout(data, state) {
    return {
        type: 'ACCOUNT_LOGOUT',
        payload: data
    }
}