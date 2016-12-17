import { NgModule } from '@angular/core';
import { DashboardPage } from './dashboard.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { UserActions } from '../../actions/user.actions';
import { SessionActions } from '../../actions/session.actions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardPage,
    NavBarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    // NgbDropdownConfig,
    UserActions,
    SessionActions,
  ],
  exports: []
})
export class DashboardModule {}
export default DashboardModule;
