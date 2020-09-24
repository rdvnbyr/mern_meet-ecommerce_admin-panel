import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from './action-types';

export const getProducts = (token) => {
    return {
        type: GET_PRODUCTS,
        payload: {
            access_token: token
        }
    };
};

export const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: {
            products: products
        }
    };
};

export const getProductsFail = (error) => {
    return {
        type: GET_PRODUCTS_FAIL,
        payload: {
            error: error
        }
    };
};