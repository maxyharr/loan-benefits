import { combineReducers } from 'redux';
import { dataReducer } from './data.reducer';

export interface IAppState {
  data?: any;
};

export const rootReducer = combineReducers<IAppState>(
  {
    data: dataReducer,
  }
);
