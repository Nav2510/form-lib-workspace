import { Component, Input, OnInit } from '@angular/core';
import { ConfigType } from '../../../../models/config-type.model';

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
  constructor() { }

  ngOnInit(): void {
  }

}
