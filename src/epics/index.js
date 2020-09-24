import { combineEpics } from 'redux-observable';

import { productEpics} from './product-epics';
 
export const epics = combineEpics(
    productEpics
);