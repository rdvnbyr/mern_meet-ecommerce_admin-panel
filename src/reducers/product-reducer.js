import { 
        ADD_PRODUCT,
        ADD_PRODUCT_SUCCESS,
        ADD_PRODUCT_FAIL,
        UPDATE_PRODUCT,
        UPDATE_PRODUCT__SUCCESS,
        UPDATE_PRODUCT_FAIL,
        DELETE_PRODUCT,
        DELETE_PRODUCT__SUCCESS,
        DELETE_PRODUCT_FAIL,
        GET_PRODUCTS, 
        GET_PRODUCTS_SUCCESS,
        GET_PRODUCTS_FAIL,
        GET_ONE_PRODUCT,
        GET_ONE_PRODUCT_SUCCESS,
        GET_ONE_PRODUCT_FAIL
} from '../actions';

const initialState = {
    loading: false,
    error: '',
    resMsg: '',
    products: [],
    product: {},
    redirect: false
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // ADD PRODUCT ACTION
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
        // UPDATE PRODUCT ACTION
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
        // DELETE PRODUCT ACTION
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
        // GET PRODUCT ACTION
        case GET_PRODUCTS:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            };
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        // GET ONE PRODUCT ACTION
        case GET_ONE_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case GET_ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload.product
            };
        case GET_ONE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        default:
            return state;
    }
};