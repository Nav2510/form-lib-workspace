import { Component, OnInit } from '@angular/core';

import { ADVANCE_CONFIG } from './advance.constant';

@Component({
  selector: 'app-advance-setting-config',
  templateUrl: './advance-setting-config.component.html',
  styleUrls: ['./advance-setting-config.component.scss'],
})
export class AdvanceSettingConfigComponent implements OnInit {
  ADVANCE_CONFIG = ADVANCE_CONFIG;
  constructor() {}

  ngOnInit(): void {}
}
