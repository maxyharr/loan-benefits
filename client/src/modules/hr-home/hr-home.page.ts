import 'rxjs/add/operator/let';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as userReducer from '../../reducers/user.reducer';
import {User} from '../../types';

@Component({
  template: `
    <h3>HR Home Page</h3>
    <p>No user backend set up yet to handle current user. Just stubbing the new user service</p>
    <p>Also broke hot module reloading when moving from ng2-redux to ngrx/store, but will either fix that in the future or force page reloads on code changes.</p>
    <p>Email: {{user.email}}</p>
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
