import { combineReducers } from 'redux';
import * as session from './session';

export interface IAppState {
  session?: session.ISession;
};

export const rootReducer = combineReducers<IAppState>({
  session: session.sessionReducer,
});

export function deimmutify(store) {
  return {
    session: store.session.toJS(),
  };
}

export function reimmutify(plain) {
  return {
    session: session.SessionFactory(plain.session),
  };
}