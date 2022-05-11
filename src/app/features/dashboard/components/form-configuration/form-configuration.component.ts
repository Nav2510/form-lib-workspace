import { Component } from '@angular/core';

import { FIELD_CONFIG_MENU, FORM_CONFIG_MENU } from './form-config.constant';

@Component({
  selector: 'app-form-configuration',
  templateUrl: './form-configuration.component.html',
  styleUrls: ['./form-configuration.component.scss'],
})
export class FormConfigurationComponent {
  FORM_CONFIG_MENU = FORM_CONFIG_MENU;
  FIELD_CONFIG_MENU = FIELD_CONFIG_MENU;
}
