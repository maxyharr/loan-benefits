import { Component, ViewEncapsulation } from '@angular/core';
import '../../public/css/styles.global.scss';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { DataActions } from '../actions/data.actions';
import { IAppState } from '../store';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @select(['data']) data$: Observable<any>;

  // member to test subscribe model
  data: string = "Default no data";

  constructor(
    private dataActions: DataActions,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.data$.subscribe(_data => {
      if (_data) this.data = _data;
    });
  }

  onClick() {
    this.dataActions.updateDispatch("We have data!");
  }
}
