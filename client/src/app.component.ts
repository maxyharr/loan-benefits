import '../public/styles/index.scss';
import { Component } from '@angular/core';
import { UserActions } from './actions/user.actions';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'main-app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  private titleService = new Title();

  constructor(private userActions: UserActions) {
    this.titleService.setTitle('Uproot');
  }

  ngOnInit() {
    this.userActions.loadUser();
  }
}
