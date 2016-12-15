import '../public/css/styles.global.scss';
import { Component } from '@angular/core';
import { UserActions } from './actions/user.actions';

@Component({
  selector: 'main-app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private userActions: UserActions) {}

  ngOnInit() {
    this.userActions.loadUser();
  }
}
