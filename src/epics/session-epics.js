import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { SESSION_LOGIN, SESSION_LOGOUT } from '../actions';
import { loginFail, loginSuccess } from '../actions';


/**
 * add product to db
 * @param {*} action$
 */
function sessionLogin(action$,state$) {
    return action$.pipe(
        ofType(SESSION_LOGIN),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        state.session.apiUrl + '/auth/login',
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

/**
 * add product to db
 * @param {*} action$
 */
function sessionLogout(action$,state$) {
    return action$.pipe(
        ofType(SESSION_LOGOUT),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        state.session.apiUrl + '/auth/login',
                        state.session.userId,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.token}`
                            }
                        }
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
    sessionLogin,
    sessionLogout
);