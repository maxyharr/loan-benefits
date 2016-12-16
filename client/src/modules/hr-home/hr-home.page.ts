import 'rxjs/add/operator/let';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as userReducer from '../../reducers/user.reducer';
import {User} from '../../types';

@Component({
  template: `
    <template [ngIf]="!user">
      <h3>HR Home Page</h3>
      <p>You are not signed in...</p>
    </template>

    <template [ngIf]="user">
      <h2>Welcome {{user.email}}, you are now signed in...</h2>
    </template>

  `
})
export class HrHomePage implements OnInit {
  private user: User;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    userReducer.getCurrentUser(this.store).subscribe(user => this.user = user);
  }

}
export default HrHomePage;
