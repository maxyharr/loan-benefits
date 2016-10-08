import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

export const DATA_ACTIONS = {
  UPDATE_DATA: 'UPDATE_DATA'
}

/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
@Injectable()
export class DataActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  updateDispatch(data: any) {
    setTimeout(() => {
      // Pretend we call out to a service here (async promise)
      this.ngRedux.dispatch(this.update(data));
    }, 1000);
  }

  update(newData: any) {
    return {
      type: DATA_ACTIONS.UPDATE_DATA,
      payload: newData
    }
  }
}