import {ApplicationRef} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';

import {
  // ApplicationRef,
  NgModule,
  enableProdMode } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HrHomeModule } from './modules/hr-home/hr-home.module';
import { AuthModule } from './modules/auth/auth.module';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

// Provider Actions
import { UserActions } from './actions/user.actions';

const prod = process.env.ENV === 'production' || process.env.NODE_ENV === 'production';
if (prod) {
  enableProdMode();
}

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducer),
    AppRoutingModule,
    DashboardModule,
    HrHomeModule,
    AuthModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    UserActions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef
  ) {}

  hmrOnInit(hotStore: any): void {
    if (!hotStore || !hotStore.state) return;

    // otherwise, inject AppStore here and update it
    const initialState = hotStore.state;
    // this.ngRedux.replaceReducer(() => {
    //   return initialState;
    // });

    if ('restoreInputValues' in hotStore) {
      hotStore.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete hotStore.state;
    delete hotStore.restoreInputValues;
  }

  hmrOnDestroy(hotStore: any): void {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    hotStore.disposeOldHosts = createNewHosts(cmpLocation);

    // inject your AppStore and grab state then set it on store
    // let appState = this.ngRedux.getState();
    // hotStore.state = Object.assign({}, appState);


    // save input values
    hotStore.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(hotStore: any): void {
    // display new elements
    hotStore.disposeOldHosts();
    delete hotStore.disposeOldHosts;
    // anything you need done the component is removed
  }
}
