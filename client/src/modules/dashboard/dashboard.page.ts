import 'rxjs/add/operator/let';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {User} from '../../types';
import {UserActions} from '../../actions/user.actions';
import * as userReducer from '../../reducers/user.reducer';
import {Subscription} from 'rxjs';

@Component({
  template: `
    <nav-bar [user]="user"></nav-bar>
    <div class="container-fluid">
      <div class="row">
        <div class="content col-md-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class DashboardPage implements OnInit, OnDestroy {
  private user: User;
  private sub: Subscription;

  constructor(
    private userActions: UserActions,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.sub = userReducer.getCurrentUser(this.store).subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
export default DashboardPage;