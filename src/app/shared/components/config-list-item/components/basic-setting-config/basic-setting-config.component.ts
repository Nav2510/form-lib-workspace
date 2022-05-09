import { Component, OnInit } from '@angular/core';

import { BASIC_CONFIG } from './basic.constant';

@Component({
  selector: 'app-basic-setting-config',
  templateUrl: './basic-setting-config.component.html',
  styleUrls: ['./basic-setting-config.component.scss']
})
export class BasicSettingConfigComponent implements OnInit {
  BASIC_CONFIG = BASIC_CONFIG;

  ngOnInit(): void {
  }

}
