import { Component, Input } from '@angular/core';
import { User } from '../../types';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['/home']">Uproot</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/home']">Home</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a *ngIf="user" href="#" (click)="logout(); $event.preventDefault();">
                <i class="fa fa-sign-out"></i>
                Logout
              </a>
              <a *ngIf="!user" [routerLink]="['/login']">
                <i class="fa fa-sign-in"></i>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavBarComponent {
  @Input() user: User;

  constructor(
    private sessionActions: SessionActions,
    private userActions: UserActions,
    private router: Router
  ) {}

  ngOnChanges(changeRecord) {}

  logout() {
    this.sessionActions.logout().then(() => this.userActions.loadUser().then(() => {
      // navigate to login after logging out
      if (!this.user) {
        this.router.navigate(['/login']);
      }
    }));
  }
}
