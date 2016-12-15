import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SessionsService } from '../services/sessions.service';
import { UserActions } from './user.actions';

@Injectable()
export class SessionActions {
  private sessionsService: SessionsService = new SessionsService();
  private userActions: UserActions;

  constructor(
    private store: Store<any>
  ) {
    this.userActions = new UserActions(store);
  }

  login(user): Promise<any> {
    return this.sessionsService.login(user).then(() => {
      this.userActions.loadUser();
    });
  }

  logout(): Promise<any> {
    return this.sessionsService.logout().then(() => {
      this.userActions.loadUser();
    });
  }
}
