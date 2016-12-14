import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';

@Injectable()
export class UserActions {
  userService: UserService = new UserService();

  constructor(private store: Store<any>) {}

  loadUser(): void {
    this.userService.getUser().then(user => {
      this.store.dispatch({ type: "LOAD_USER", payload: user });
    });
  }
}
