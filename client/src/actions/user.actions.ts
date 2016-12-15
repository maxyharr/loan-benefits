import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { errorParser } from '../utils/general.utils';

@Injectable()
export class UserActions {
  userService: UserService = new UserService();

  constructor(private store: Store<any>) {}

  loadUser(): Promise<any> {
    return this.userService.getUser().then(user => {
      this.store.dispatch({ type: "LOAD_USER", payload: user });
    });
  }

  signUp(user): Promise<any> {
    return this.userService.signUp(user).then(() => {
      this.loadUser();
    }).catch((errors) => {
      alert(errorParser(errors)); // TODO: Don't use alert in the future
    });
  }
}
