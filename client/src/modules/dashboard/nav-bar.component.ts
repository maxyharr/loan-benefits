import { Component, Input } from '@angular/core';
import { User } from '../../types';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';

@Component({
  selector: 'nav-bar',
  template: `
    <template [ngIf]="user">
      <a href="#" (click)="logout(); $event.preventDefault();">Logout</a>
    </template>

    <template [ngIf]="!user">
      <a [routerLink]="['/login']">Login</a>
    </template>
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
