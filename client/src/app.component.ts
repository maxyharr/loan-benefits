import '../public/styles/index.scss';
import { Component } from '@angular/core';
import { UserActions } from './actions/user.actions';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'main-app',
  template: `
    <simple-notifications [options]="toastOptions"></simple-notifications>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  private titleService = new Title();

  public toastOptions = {
    position: ["bottom", "right"],
    timeOut: 3000,
    animate: 'scale',
    lastOnBottom: true,
    preventLastDuplicates: true
  };

  constructor(private userActions: UserActions) {
    this.titleService.setTitle('Uproot');
  }

  ngOnInit() {
    this.userActions.loadUser();
  }
}
