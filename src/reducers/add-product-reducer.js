import { 
        ADD_PRODUCT,
        ADD_PRODUCT_SUCCESS,
        ADD_PRODUCT_FAIL,
        UPDATE_PRODUCT,
        UPDATE_PRODUCT__SUCCESS,
        UPDATE_PRODUCT_FAIL,
        DELETE_PRODUCT,
        DELETE_PRODUCT__SUCCESS,
        DELETE_PRODUCT_FAIL
} from '../actions';

const initialState = {
    loading: false,
    error: '',
    resMsg: '',
    product: {},
    redirect: false
};

export const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            console.log(action.payload.respond);
            return {
                ...state,
                loading: false,
                resMsg: action.payload.respond.message
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PRODUCT__SUCCESS:
            console.log(action.payload.respond);
            return {
                ...state,
                loading: false,
                resMsg: action.payload.respond.message
            }
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case DELETE_PRODUCT__SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case DELETE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};