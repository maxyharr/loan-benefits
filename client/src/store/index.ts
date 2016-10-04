import { combineReducers } from 'redux';
import { hasDataReducer } from './has-data.reducer';

export interface IAppState {
  hasData?: boolean
};

export const rootReducer = combineReducers<IAppState>({
  hasData: hasDataReducer
});
