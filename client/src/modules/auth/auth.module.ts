import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionActions } from '../../actions/session.actions';
import { UserActions } from '../../actions/user.actions';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [UserActions, SessionActions],
  exports: []
})
export class AuthModule {}
export default AuthModule;
