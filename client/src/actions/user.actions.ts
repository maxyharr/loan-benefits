import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { errorParser } from '../utils/general.utils';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UserActions {
  userService: UserService = new UserService();

  constructor(
    private store: Store<any>,
    private toastService: NotificationsService
  ) {}

  loadUser(): Promise<any> {
    return this.userService.getUser().then(user => {
      this.store.dispatch({ type: "LOAD_USER", payload: user });
    });
  }

  signUp(user): Promise<any> {
    return this.userService.signUp(user).then(() => {
      this.loadUser();
    }).catch(errors => {
      this.toastService.error('oops!', errorParser(errors));
    });
  }
}
