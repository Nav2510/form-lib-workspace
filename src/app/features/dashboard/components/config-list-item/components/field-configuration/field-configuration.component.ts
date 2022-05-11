import { Component, Input, OnInit } from '@angular/core';

import { ConfigType, ConfigTypeEnum } from '../../../../../../shared/models/config-type.model';

@Component({
  selector: 'app-field-configuration',
  templateUrl: './field-configuration.component.html',
  styleUrls: ['./field-configuration.component.scss']
})
export class FieldConfigurationComponent implements OnInit {
  tabs: {[keys in ConfigType]: string[]} = {
    appearance: ['Form', 'Section'],
    dependency: ['Dependency'],
    field: ['Basic', 'Advanced', 'Dependencies']
  }
  @Input() type: ConfigType = 'field';
  readonly configType = ConfigTypeEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
