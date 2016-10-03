import { HasDataActions } from '../actions/has-data.actions';

const INITIAL_STATE: boolean = true;

export function hasDataReducer(state: boolean = INITIAL_STATE, action: any) {
  switch (action.type) {
    case HasDataActions.UPDATE_HAS_DATA:
      return state + action.payload;
    default:
      return state;
  }
}