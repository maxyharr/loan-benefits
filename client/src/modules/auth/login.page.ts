import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';
import * as userReducer from '../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
export class LoginPage implements OnInit, OnDestroy {
  private loggingIn: boolean = true;
  private sub: Subscription;

  private user = {
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

  ngOnInit() {
    this.sub = userReducer.getCurrentUser(this.store).subscribe(user => {
      if (user) this.router.navigate(['/home']);
    });
  }

  onSubmit(): void {
    if (this.loggingIn)
      this.sessionActions.login(this.user).then(() => {

      });
    else if (!this.loggingIn) // Signing up
      this.userActions.signUp(this.user);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}