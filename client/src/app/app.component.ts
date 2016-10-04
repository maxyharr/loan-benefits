import { Component, ViewEncapsulation } from '@angular/core';
import '../../public/css/styles.global.scss';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { HasDataActions } from '../actions/has-data.actions';
import { IAppState } from '../store';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @select(['hasData']) hasData$: Observable<boolean>;

  // member to test subscribe model
  hasData: boolean;
  data: string = "No data yet..."

  constructor(
    private hasDataActions: HasDataActions,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.hasData$.subscribe(hasDataGotBack => {
      if (hasDataGotBack) this.data = "We have data!!!";
    });
  }

  onClick() {
    this.hasDataActions.updateDispatch(true);
  }
}
