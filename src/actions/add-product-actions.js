import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS } from './action-types';

export const addProduct = (product, token) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product: product,
            token: token
        }
    };
};

export const addProductSuccess = () => {
    return {
        type: ADD_PRODUCT_SUCCESS
    };
};

export const addProductFail = () => {
    return {
        type: ADD_PRODUCT_FAIL
    };
};