import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SessionsService } from '../services/sessions.service';
import { UserActions } from './user.actions';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class SessionActions {
  private sessionsService: SessionsService = new SessionsService();
  private userActions: UserActions;

  constructor(
    private store: Store<any>,
    private toastService: NotificationsService
  ) {
    this.userActions = new UserActions(store, toastService);
  }

  login(user): Promise<any> {
    return this.sessionsService.login(user).then(() => {
      this.userActions.loadUser();
    }).catch(error => {
      this.toastService.error('oops!', error.body.message);
    });
  }

  logout(): Promise<any> {
    return this.sessionsService.logout().then(() => {
      this.userActions.loadUser();
    });
  }
}
