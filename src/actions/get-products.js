import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_ONE_PRODUCT,
    GET_ONE_PRODUCT_SUCCESS,
    GET_ONE_PRODUCT_FAIL
} from './action-types';

/**
 * 
 * @param type{string} token 
 */
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

/**
 * @param type{string} token
 * @param type{string} productId
 */
export const getOneProduct = (token, productId) => {
    return {
        type: GET_ONE_PRODUCT,
        payload: {
            access_token: token,
            _id: productId
        }
    };
};

export const getOneProductSuccess = (product) => {
    return {
        type: GET_ONE_PRODUCT_SUCCESS,
        payload: {
            product: product
        }
    };
};

export const getOneProductFail = (error) => {
    return {
        type: GET_ONE_PRODUCT_FAIL,
        payload: {
            error: error
        }
    };
};