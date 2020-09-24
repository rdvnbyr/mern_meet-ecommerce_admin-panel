import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../actions';

const initialState = {
    loading: false,
    error: '',
    products: []
}

export const getProductsReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};