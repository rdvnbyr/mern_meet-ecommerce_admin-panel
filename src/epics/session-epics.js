import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { SESSION_LOGIN } from '../actions';
import { loginFail, loginSuccess } from '../actions';


const api = "https://shopapi.apps.salevali.de"

/**
 * add product to db
 * @param {*} action$
 */
function sessionLogin(action$) {
    return action$.pipe(
        ofType(SESSION_LOGIN),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        api + '/auth/login',
                        action.payload.user
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return loginSuccess(res.data);
                        } else {
                            return loginFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return loginFail();
                    } )))
    );
};

export const sessionEpics = combineEpics(
    sessionLogin
);