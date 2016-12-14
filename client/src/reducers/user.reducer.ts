import {User} from '../types';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

export function reducer(state: User = null, action: Action): User {
  switch (action.type) {
    case "LOAD_USER": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

// Observables
export function getCurrentUser(state$: Store<any>): Observable<User> {
  return state$.select(state => state.user);
}