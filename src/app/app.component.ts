import { Component, ViewEncapsulation } from '@angular/core';

import { LIB_VERSION } from './shared/constants/version.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  LIB_VERSION = LIB_VERSION
}
