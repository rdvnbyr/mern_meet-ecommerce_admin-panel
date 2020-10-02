import { SESSION_LOGIN, SESSION_LOGIN_SUCCESS, SESSION_LOGIN_FAIL, SESSION_LOGOUT, SESSION_LOGOUT_SUCCESS, SESSION_LOGOUT_FAIL } from '../actions';

const initialState = {
    loading: false,
    isLogin: false,
    error: '',
    token: '',
    userId: '',
    user: {}
};

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SESSION_LOGIN:
            return {
                ...state,
                loading: true
            }
        case SESSION_LOGIN_SUCCESS:
        console.log('REDUCER', action.payload.data)
            return {
                ...state,
                loading: false,
                isLogin: true,
                user: action.payload.data.user,
                token: action.payload.data.token,
                userId: action.payload.data.userId
            }
        case SESSION_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isLogin: false,
                user: {}
            }
        case SESSION_LOGOUT:
            return {
                ...state,
                loading: true
            }
        case SESSION_LOGOUT_SUCCESS:
        console.log('REDUCER', action.payload)
            return {
                ...state,
                loading: false,
                isLogin: false,
                user: {},
                token: '',
                userId: ''
            }
        case SESSION_LOGOUT_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};