import { Component, Input } from '@angular/core';
import { User } from '../../types';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
        </div>
        <div class="col-md-6">
          <template [ngIf]="user">
            <i class="fa fa-times"></i> <a href="#" (click)="logout(); $event.preventDefault();">Logout</a>
          </template>

          <template [ngIf]="!user">
            <i class="fa fa-times"></i> <a [routerLink]="['/login']">Login</a>
          </template>
        </div>
      </div>
    </div>
  `
})
export class NavBarComponent {
  @Input() user: User;

  constructor(
    private sessionActions: SessionActions,
    private userActions: UserActions
  ) {}

  logout() {
    this.sessionActions.logout().then(() => this.userActions.loadUser());
  }
}
