import { Component, OnDestroy } from '@angular/core';
import { SessionActions } from '../../actions/session.actions';
import * as userReducer from '../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  template: `
    <div class="container huge-top-buffer">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="card raise-1 padding">
            <h2>Log In</h2>
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

              <div class="text-center">
                <button class="btn btn-primary" type="submit">Log In</button>
                <div class="small-top-buffer">
                  <a [routerLink]="['/signup']">(I don't have an account yet)<br> Sign me up!</a>
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
  private sub: Subscription;

  private userForm = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor(
    private sessionActions: SessionActions,
    private store: Store<any>,
    private router: Router,
    private toastService: NotificationsService,
  ) {}

  onSubmit(): void {
    this.sessionActions.login(this.userForm).then(() => {
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