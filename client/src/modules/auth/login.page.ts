import { Component } from '@angular/core';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';

@Component({
  template: `
    <button (click)="loggingIn = false" *ngIf="loggingIn">Sign Up!</button>
    <button (click)="loggingIn = true" *ngIf="!loggingIn">I already have an account</button>
    <form (submit)="onSubmit()">
      <input type="text" name="email" [(ngModel)]="user.email" placeholder="Email"/>
      <input type="password" name="password" [(ngModel)]="user.password" placeholder="Password"/>
      <input type="password" name="passwordConfirmation" [(ngModel)]="user.passwordConfirmation" placeholder="Confirm password" *ngIf="!loggingIn"/>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginPage {
  private loggingIn: boolean = true;

  private user = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor(
    private sessionActions: SessionActions,
    private userActions: UserActions
  ) {}

  onSubmit(): void {
    if (this.loggingIn)
      this.sessionActions.login(this.user);
    else if (!this.loggingIn) // Signing up
      this.userActions.signUp(this.user);
  }
}