import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-configuration',
  templateUrl: './form-configuration.component.html',
  styleUrls: ['./form-configuration.component.scss'],
})
export class FormConfigurationComponent implements OnInit {
  formConfig = [
    {
      label: 'Appearance',
    },
    {
      label: 'Dependencies',
    },
    {
      label: 'Other Configuration',
    },
  ];
  componentConfig = [
    {
      label: 'Input',
    },
    {
      label: 'Textarea',
    },
    {
      label: 'Checkbox',
    },
    {
      label: 'Radio',
    },
    {
      label: 'Dropdown',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
