import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAIL,
    ADD_PRODUCT_SUCCESS,
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

} from './action-types';

/* ------------------------------ */
/**
 * Add product => POST
 * @param {*} formData 
 */
export const addProduct = (formData) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            formData: formData
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
/* ------------------------------ */
/* ------------------------------ */
/**
 * update product  => PUT
 * @param {*} formData 
 */
export const updateProduct = (formData, productId ) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            formData: formData,
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
/* ------------------------------ */
/* ------------------------------ */
/**
 * delete product actions
 * @param type{string} product id
 */
export const deleteProduct = (productId) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            productId: productId
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
/* ------------------------------ */
/* ------------------------------ */

/**
 * Action for Get all Products from db
 */
export const getProducts = () => {
    return {
        type: GET_PRODUCTS
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
/* ------------------------------ */
/* ------------------------------ */
/**
 * Action for Get one product
 * @param type{string} productId
 */
export const getOneProduct = (productId) => {
    return {
        type: GET_ONE_PRODUCT,
        payload: {
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
/* ------------------------------ */
