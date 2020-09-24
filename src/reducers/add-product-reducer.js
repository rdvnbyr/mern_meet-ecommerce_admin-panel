import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL} from '../actions';

const initialState = {
    loading: false,
    error: '',
    token: '',
    isLogin: false
};

export const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
};