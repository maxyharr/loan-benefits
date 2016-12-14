import 'rxjs/add/operator/let';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as userReducer from '../../reducers/user.reducer';
import {User} from '../../types';

@Component({
  template: `
    <h3>HR Home Page</h3>
    <p>Broke hot module reloading when moving from ng2-redux to ngrx/store, but will either fix that in the future.</p>
    <p>Force page reloads seem to just do the trick for now anyway</p>
    <p>Email retrieved from static user service: {{user?.email}}</p>
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
