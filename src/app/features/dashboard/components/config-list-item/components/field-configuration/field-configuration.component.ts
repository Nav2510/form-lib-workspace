import { Component, Input } from '@angular/core';

import { ConfigType, ConfigTypeEnum } from '../../../../../../shared/models/config-type.model';

@Component({
  selector: 'app-field-configuration',
  templateUrl: './field-configuration.component.html',
  styleUrls: ['./field-configuration.component.scss']
})
export class FieldConfigurationComponent {
  @Input() type: ConfigType = 'field';
  @Input() controlType: string | null = null;

  tabs: {[keys in ConfigType]: string[]} = {
    appearance: ['Form', 'Section'],
    dependency: ['Dependency'],
    field: ['Basic', 'Advanced', 'Dependencies']
  }

  readonly configType = ConfigTypeEnum;
}
