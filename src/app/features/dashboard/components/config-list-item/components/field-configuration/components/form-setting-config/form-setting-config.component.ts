import { Component } from '@angular/core';

import { FORM_SETTING_CONFIG } from './form-setting-config.constant';

@Component({
  selector: 'app-form-setting-config',
  templateUrl: './form-setting-config.component.html',
  styleUrls: ['./form-setting-config.component.scss'],
})
export class FormSettingConfigComponent {
  FORM_SETTING_CONFIG = FORM_SETTING_CONFIG;

  onValueChanges(value: any): void {
    console.log(value)
  }
}
