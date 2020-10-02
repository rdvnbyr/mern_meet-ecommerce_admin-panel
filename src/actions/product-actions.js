import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAIL,
    ADD_PRODUCT_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT__SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT,
    DELETE_PRODUCT__SUCCESS,
    DELETE_PRODUCT_FAIL

} from './action-types';

export const addProduct = (formData, token) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            formData: formData,
            token: token
        }
    };
};

export const addProductSuccess = (res) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: {
            respond: res
        }
    };
};

export const addProductFail = () => {
    return {
        type: ADD_PRODUCT_FAIL
    };
};

/**
 * 
 * @param {*} formData 
 * @param {*} token 
 */
export const updateProduct = (formData, token, productId ) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            formData: formData,
            token: token,
            productId: productId
        }
    };
};

export const updateProductSuccess = (res) => {
    return {
        type: UPDATE_PRODUCT__SUCCESS,
        payload: {
            respond: res
        }
    };
};

export const updateProductFail = () => {
    return {
        type: UPDATE_PRODUCT_FAIL
    };
};

/**
 * delete product actions
 * @param type{string} product id
 */
export const deleteProduct = (productId, token) => {
    console.log(token)
    return {
        type: DELETE_PRODUCT,
        payload: {
            productId: productId,
            token: token
        }
    }
};

export const deleteProductSuccess = (data) => {
    return {
        type: DELETE_PRODUCT__SUCCESS,
        payload: {
            data: data
        }
    }
};

export const deleteProductFail = () => {
    return {
        type: DELETE_PRODUCT_FAIL
    }
};