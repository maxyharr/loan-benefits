import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
@Injectable()
export class HasDataActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  static UPDATE_HAS_DATA: string = 'UPDATE_HAS_DATA';

  update(newValue: boolean) {
    // Pretend we call out to a service here (async promise)
    setTimeout(
      this.ngRedux.dispatch({ type: HasDataActions.UPDATE_HAS_DATA, payload: newValue }),
      1000 // Fake service delay
    );
  }
}