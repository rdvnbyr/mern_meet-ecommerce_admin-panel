import { combineEpics } from 'redux-observable';

import { productEpics} from './product-epics';
import {sessionEpics} from './session-epics';
 
export const epics = combineEpics(
    productEpics,
    sessionEpics
);