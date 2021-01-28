import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ADD_PRODUCT,  GET_PRODUCTS, GET_ONE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, deleteProductSuccess, deleteProductFail } from '../actions';
import { addProductSuccess, addProductFail, getProductsFail, getProductsSuccess, getOneProductSuccess, getOneProductFail, updateProductSuccess, updateProductFail } from '../actions';


/**
 * add product to db
 * @param {*} action$
 */
function addProductEpics(action$,state$) {
    return action$.pipe(
        ofType(ADD_PRODUCT),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        `${state.session.apiUrl}/admin/add-products`,
                        action.payload.formData,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.token}`
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
function updateProductEpics(action$,state$) {
    return action$.pipe(
        ofType(UPDATE_PRODUCT),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .patch(
                        `${state.session.apiUrl}/admin/update-product/${action.payload.productId}`,
                        action.payload.formData,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.token}` 
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


function getProductsEpics(action$,state$) {
    return action$.pipe(
        ofType(GET_PRODUCTS),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .get(
                        `${state.session.apiUrl}/admin/get-products`,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.token}`
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
function getOneProductEpics(action$,state$) {
    return action$.pipe(
        ofType(GET_ONE_PRODUCT),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .get(
                        `${state.session.apiUrl}/admin/get-update-product/${action.payload._id}`,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.token}`
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

function deleteProductEpics(action$,state$) {
    return action$.pipe(
        ofType(DELETE_PRODUCT),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .delete(
                        state.session.apiUrl + `/admin/delete-product/${action.payload.productId}`,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.token}`
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