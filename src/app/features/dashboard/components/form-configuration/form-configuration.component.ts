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
      src: '../../../../assets/icons/input.svg',
    },
    {
      label: 'Textarea',
      src: '../../../../assets/icons/textarea.svg',
    },
    {
      label: 'Checkbox',
      src: '../../../../assets/icons/checkbox.svg',
    },
    {
      label: 'Radio',
      src: '../../../../assets/icons/radio.svg',
    },
    {
      label: 'Dropdown',
      src: '../../../../assets/icons/dropdown.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
