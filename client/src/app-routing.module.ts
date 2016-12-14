import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { HrHomePage } from './modules/hr-home/hr-home.page';

export const routes: Routes = [
  { path: '', component: DashboardPage,
    children: [
      { path: '', redirectTo: 'home' },
      // { path: 'welcome', component: WelcomePage },
      // { path: 'registration', component: RegistrationPage },
      { path: 'home', component: HrHomePage }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    // Guards, CanDeactivate
  ]
})
export class AppRoutingModule {}