import 'rxjs/add/operator/let';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {User} from '../../types';
import {UserActions} from '../../actions/user.actions';
import * as userReducer from '../../reducers/user.reducer';

@Component({
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="content col-md-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class DashboardPage implements OnInit {
  private user: User;

  constructor(
    private userActions: UserActions,
    store: Store<any>
  ) {
    userReducer.getCurrentUser(store).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.userActions.loadUser();
  }

}
export default DashboardPage;