import { NgModule } from '@angular/core';
import { HrHomePage } from './hr-home.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { NgbModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HrHomePage,
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
export class HrHomeModule {}
export default HrHomeModule;
