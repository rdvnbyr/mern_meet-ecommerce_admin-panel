import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ADD_PRODUCT,  GET_PRODUCTS } from '../actions';
import { addProductSuccess, addProductFail, getProductsFail, getProductsSuccess } from '../actions';

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
                        'https://meethub-node-restapi.herokuapp.com/admin/add-products',
                        action.payload.product,
                        {
                            headers: {
                                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuZGUiLCJ1c2VyaWQiOiI1ZjYyNjZiYWMwNTJlNWJjZjdmYTJlOTAiLCJpYXQiOjE2MDA5Nzc4NzcsImV4cCI6MTYwMDk4ODY3N30.XG8rKaaunBXErBCAuG_CzS_pcrvqOgP0SwdYUXpOBLw` 
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


function getProductsEpics(action$) {
    return action$.pipe(
        ofType(GET_PRODUCTS),
        mergeMap(
            (action) => from(
                axios
                    .get(
                        'https://meethub-node-restapi.herokuapp.com/admin/get-products',
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

export const productEpics = combineEpics(
    addProductEpics,
    getProductsEpics
);