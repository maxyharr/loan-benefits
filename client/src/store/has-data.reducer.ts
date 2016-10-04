import { HAS_DATA_ACTIONS } from '../actions/has-data.actions';

const INITIAL_STATE: boolean = false;

export function hasDataReducer(state: boolean = INITIAL_STATE, action: any) {
  switch (action.type) {
    case HAS_DATA_ACTIONS.UPDATE_HAS_DATA:
      return action.payload;
    default:
      return state;
  }
}