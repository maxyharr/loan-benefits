import { NgModule } from '@angular/core';
import { DashboardPage } from './dashboard.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { NgbModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    RouterModule,
    CommonModule,
    // NgbModule,
  ],
  providers: [
    // NgbDropdownConfig,
  ],
  exports: []
})
export class DashboardModule {}
export default DashboardModule;
