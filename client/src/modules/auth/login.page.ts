import { Component, OnDestroy } from '@angular/core';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';
import * as userReducer from '../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../types';
import { NotificationsService } from 'angular2-notifications';

@Component({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="card raise-1">
            <h2>{{loggingIn ? 'Login to Uproot' : 'Sign in'}}</h2>
            <hr>
            <form (submit)="onSubmit()">
              <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" type="text" name="email" [(ngModel)]="userForm.email" placeholder="Email"/>
              </div>

              <div class="form-group">
                <label for="email">Password:</label>
                <input class="form-control" type="password" name="password" [(ngModel)]="userForm.password" placeholder="Password"/>
              </div>

              <div *ngIf="!loggingIn" class="form-group">
                <label for="email">Confirm Password (6 characters):</label>
                <input class="form-control" type="password" name="passwordConfirmation" [(ngModel)]="userForm.passwordConfirmation" placeholder="Confirm password"/>
              </div>

              <div class="text-center">
                <button class="btn btn-primary" type="submit">{{loggingIn ? 'Login' : 'Sign up'}}</button>
                <div class="small-top-buffer">
                  <a (click)="loggingIn = false" *ngIf="loggingIn">(I don't have an account yet)<br> Sign me up!</a>
                  <a (click)="loggingIn = true" *ngIf="!loggingIn">I already have an account</a>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginPage implements OnDestroy {
  private loggingIn: boolean = true;
  private sub: Subscription;

  private userForm = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor(
    private sessionActions: SessionActions,
    private userActions: UserActions,
    private store: Store<any>,
    private router: Router,
    private toastService: NotificationsService,
  ) {}

  onSubmit(): void {
    if (this.loggingIn)
      this.sessionActions.login(this.userForm).then(() => {
        this.postLogin();
      });
    else if (!this.loggingIn) // Signing up
      this.userActions.signUp(this.userForm).then(() => {
        this.postLogin();
      });
  }

  postLogin() {
    this.sub = userReducer.getCurrentUser(this.store).subscribe(user => {
      if (user) {
        this.toastService.success('Success', 'You logged in.');
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}