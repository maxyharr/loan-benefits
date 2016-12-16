import { Component, OnDestroy } from '@angular/core';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';
import * as userReducer from '../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../types';

@Component({
  template: `
    <button (click)="loggingIn = false" *ngIf="loggingIn">Sign Up!</button>
    <button (click)="loggingIn = true" *ngIf="!loggingIn">I already have an account</button>
    <form (submit)="onSubmit()">
      <input type="text" name="email" [(ngModel)]="userForm.email" placeholder="Email"/>
      <input type="password" name="password" [(ngModel)]="userForm.password" placeholder="Password"/>
      <input type="password" name="passwordConfirmation" [(ngModel)]="userForm.passwordConfirmation" placeholder="Confirm password" *ngIf="!loggingIn"/>
      <button type="submit">Login</button>
    </form>
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
    private router: Router
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
      if (user) this.router.navigate(['/home']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}