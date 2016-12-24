import { Component, Input } from '@angular/core';
import { User } from '../../types';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import * as _ from 'lodash';
// const TreeLogo = require('../../../public/images/tree-logo.png');

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="navbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['/home']">
            <!--<img [src]="TreeLogo"/>--> <!-- The require isn't working properly -- at least for dev mode -->
            UprootHR
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbar" [ngbCollapse]="isCollapsed">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="http://www.uproothr.com">About Us</a>
            </li>
            <li>
              <a *ngIf="user" href="#" (click)="logout(); $event.preventDefault();">
                <i class="fa fa-sign-out"></i>
                Logout
              </a>
              <a *ngIf="!user" [routerLink]="loginOrSignupPath()">
                <i class="fa fa-sign-in"></i>
                {{titleFor(loginOrSignupPath())}}
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
  private isCollapsed: boolean = true;

  constructor(
    private sessionActions: SessionActions,
    private userActions: UserActions,
    private router: Router,
    private toastService: NotificationsService
  ) {}

  ngOnChanges(changeRecord) {}

  logout() {
    this.sessionActions.logout().then(() => this.userActions.loadUser().then(() => {
      // navigate to login after logging out
      if (!this.user) {
        this.toastService.success('success', 'Logged out');
        this.router.navigate(['/login']);
      }
    }));
  }

  loginOrSignupPath() {
    if (this.router.isActive('/login', true)) {
      return ['/signup'];
    } else return ['/login'];
  }

  titleFor(arr) {
    const str = arr[0].slice(1);
    if (str === 'login') {
      return 'Log In';
    } else {
      return 'Sign Up';
    }
  }
}
