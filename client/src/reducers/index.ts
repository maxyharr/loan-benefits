import '@ngrx/core/add/operator/select';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromUser from './user.reducer';
import { User } from '../types';
import {storeLogger} from 'ngrx-store-logger';

export interface State {
  user: User;
  // students: {[id: number]: Student};
}

const reducers = {
  user: fromUser.reducer,
};

const developmentReducer: ActionReducer<State> = compose(compose(storeFreeze, storeLogger()), combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any): any {
  if (process.env.ENV == 'production' || process.env.NODE_ENV === 'production') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}