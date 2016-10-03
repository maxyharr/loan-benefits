import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

export const HAS_DATA_ACTIONS = {
  UPDATE_HAS_DATA: 'UPDATE_HAS_DATA'
}

/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
@Injectable()
export class HasDataActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  updateDispatch(hasData: boolean) {
    setTimeout(() => {
      // Pretend we call out to a service here (async promise)
      this.ngRedux.dispatch(this.update(hasData))
    }, 1000);
  }

  update(hasData: boolean) {
    return {
      type: HAS_DATA_ACTIONS.UPDATE_HAS_DATA,
      payload: hasData
    }
  }
}