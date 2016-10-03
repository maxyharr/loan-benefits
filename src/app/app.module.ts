import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import * as createLogger  from 'redux-logger';
import { rootReducer } from '../reducers';

import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr'

// TODO place AppState interface in separate file
interface IAppState { /* ... */ };

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    ngRedux: NgRedux<IAppState>
  ) {
    ngRedux.configureStore(rootReducer, {}, [ createLogger() ]);
  }

  hmrOnInit(store: any): void {
    if (!store || !store.state) return;
    // inject AppStore here and update it
    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: any): void {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'yolo'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: any): void {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
