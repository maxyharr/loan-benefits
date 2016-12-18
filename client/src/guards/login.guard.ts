import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { User } from '../types';
import { UserActions } from '../actions/user.actions';
import * as _ from 'lodash';
import * as userReducer from '../reducers/user.reducer';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {
  user: User;
  private sub: Subscription;

  constructor(
    private router: Router,
    private userActions: UserActions,
    private store: Store<any>) {
      this.sub = userReducer.getCurrentUser(this.store).subscribe(user => this.user = user);
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let url: string = state.url;
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }

  checkLogin(url?: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.user || !_.isEmpty(this.user)) { // User is present
        resolve(true);
      }

      this.userActions.loadUser().then(() => {
        if (this.user || !_.isEmpty(this.user)) { // User is preset
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }

}