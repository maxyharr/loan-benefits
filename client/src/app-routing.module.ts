import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { HrHomePage } from './modules/hr-home/hr-home.page';
import { LoginPage } from './modules/auth/login.page';
import { SignupPage } from './modules/auth/signup.page';
import { LogoutGuard } from './guards/logout.guard';
import { LoginGuard } from './guards/login.guard';
import { StyleGuidePage } from './modules/style-guide/style-guide.page';

export const routes: Routes = [
  { path: '', component: DashboardPage,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'styleguide', component: StyleGuidePage },
      { path: 'home', component: HrHomePage, canActivate: [LoginGuard] },
      { path: 'login', component: LoginPage, canActivate: [LogoutGuard] },
      { path: 'signup', component: SignupPage, canActivate: [LogoutGuard] },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    LogoutGuard,
    LoginGuard,
  ]
})
export class AppRoutingModule {}