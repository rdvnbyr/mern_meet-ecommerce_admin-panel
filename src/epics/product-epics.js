import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ADD_PRODUCT,  GET_PRODUCTS, GET_ONE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, deleteProductSuccess, deleteProductFail } from '../actions';
import { addProductSuccess, addProductFail, getProductsFail, getProductsSuccess, getOneProductSuccess, getOneProductFail, updateProductSuccess, updateProductFail } from '../actions';


const api = "https://shopapi.apps.salevali.de"
/**
 * add product to db
 * @param {*} action$
 */
function addProductEpics(action$) {
    return action$.pipe(
        ofType(ADD_PRODUCT),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        `${api}/admin/add-products`,
                        action.payload.formData,
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}` 
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return addProductSuccess(res.data);
                        } else {
                            return addProductFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return addProductFail();
                    } )))
    );
};

/**
 * @param {*} action$ 
 */
function updateProductEpics(action$) {
    return action$.pipe(
        ofType(UPDATE_PRODUCT),
        mergeMap(
            (action) => from(
                axios
                    .patch(
                        `${api}/admin/update-product/${action.payload.productId}`,
                        action.payload.formData,
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}` 
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return updateProductSuccess(res.data);
                        } else {
                            return updateProductFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return updateProductFail();
                    } )))
    );
};


function getProductsEpics(action$) {
    return action$.pipe(
        ofType(GET_PRODUCTS),
        mergeMap(
            (action) => from(
                axios
                    .get(
                        `${api}/admin/get-products`,
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.access_token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            console.log(res.data);
                            return getProductsSuccess(res.data);
                        } else {
                            return getProductsFail(res);
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return getProductsFail(err);
                    } )))
    );
};
/**
 * 
 * @param {*} action$ 
 */
function getOneProductEpics(action$) {
    return action$.pipe(
        ofType(GET_ONE_PRODUCT),
        mergeMap(
            (action) => from(
                axios
                    .get(
                        `${api}/admin/get-update-product/${action.payload._id}`,
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.access_token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return getOneProductSuccess(res.data);
                        } else {
                            return getOneProductFail(res);
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return getOneProductFail(err);
                    } )))
    );
};

function deleteProductEpics(action$) {
    return action$.pipe(
        ofType(DELETE_PRODUCT),
        mergeMap(
            (action) => from(
                axios
                    .delete(
                        api + `/admin/delete-product/${action.payload.productId}`,
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return deleteProductSuccess(res.data);
                        } else {
                            return deleteProductFail(res);
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return deleteProductFail(err);
                    } )))
    );
};




export const productEpics = combineEpics(
    addProductEpics,
    getProductsEpics,
    getOneProductEpics,
    updateProductEpics,
    deleteProductEpics
);