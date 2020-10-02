import {
    // login
    SESSION_LOGIN,
    SESSION_LOGIN_SUCCESS,
    SESSION_LOGIN_FAIL,
    //logout
    SESSION_LOGOUT,
    SESSION_LOGOUT_SUCCESS,
    SESSION_LOGOUT_FAIL

} from './action-types';



export const login = (user) => {
    return {
        type: SESSION_LOGIN,
        payload: {
            user: user
        }
    }
};
export const loginSuccess = (user) => {
    return {
        type: SESSION_LOGIN_SUCCESS, 
        payload: {
            data: user
        }
    }
};
export const loginFail = () => {
    return {
        type: SESSION_LOGIN_FAIL
    }
};

export const logout = () => {
    return {
        type: SESSION_LOGOUT
    }
};
export const logoutSuccess = () => {
    return {
        type: SESSION_LOGOUT_SUCCESS
    }
};
export const logoutFail = () => {
    return {
        type: SESSION_LOGOUT_FAIL
    }
};