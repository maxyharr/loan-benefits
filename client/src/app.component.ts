import '../public/css/styles.global.scss';
import { Component } from '@angular/core';
import { UserActions } from './actions/user.actions';

@Component({
  selector: 'main-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    main {
      padding: 1em;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      margin-top: 50px;
      display: block;
    }
  `],
})
export class AppComponent {
  constructor(private userActions: UserActions) {}

  ngOnInit() {
    this.userActions.loadUser();
  }
}
