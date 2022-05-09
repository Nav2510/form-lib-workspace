import { Component, OnInit } from '@angular/core';
import { ConfigMenu } from '../../../../shared/models/config-menu.model';
import { ConfigTypeEnum } from '../../../../shared/models/config-type.model';

@Component({
  selector: 'app-form-configuration',
  templateUrl: './form-configuration.component.html',
  styleUrls: ['./form-configuration.component.scss'],
})
export class FormConfigurationComponent implements OnInit {
  formConfig: ConfigMenu[] = [
    {
      label: 'Appearance',
      src: '../../../../assets/icons/appearance.svg',
      configType: ConfigTypeEnum.Appearance,
    },
    {
      label: 'Dependencies',
      src: '../../../../assets/icons/dependency.svg',
      configType: ConfigTypeEnum.Dependency,
    },
  ];
  componentConfig: ConfigMenu[] = [
    {
      label: 'Input',
      src: '../../../../assets/icons/input.svg',
      type: 'input',
      configType: ConfigTypeEnum.Field,
    },
    {
      label: 'Textarea',
      src: '../../../../assets/icons/textarea.svg',
      type: 'textarea',
      configType: ConfigTypeEnum.Field,
    },
    {
      label: 'Checkbox',
      src: '../../../../assets/icons/checkbox.svg',
      type: 'checkbox',
      configType: ConfigTypeEnum.Field,
    },
    {
      label: 'Radio',
      src: '../../../../assets/icons/radio.svg',
      type: 'radio',
      configType: ConfigTypeEnum.Field,
    },
    {
      label: 'Dropdown',
      src: '../../../../assets/icons/dropdown.svg',
      type: 'dropdown',
      configType: ConfigTypeEnum.Field,
    },
  ];

  ngOnInit(): void {}
}
