import { DATA_ACTIONS } from '../actions/data.actions';

const INITIAL_STATE: any = '';

export function dataReducer(state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case DATA_ACTIONS.UPDATE_DATA:
      return action.payload;
    default:
      return state;
  }
}