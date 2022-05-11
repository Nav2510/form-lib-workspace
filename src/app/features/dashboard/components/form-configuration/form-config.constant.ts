import { ConfigMenu } from "../../../../shared/models/config-menu.model";
import { ConfigTypeEnum } from "../../../../shared/models/config-type.model";

export const FORM_CONFIG_MENU: ConfigMenu[] = [
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
export const FIELD_CONFIG_MENU: ConfigMenu[] = [
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
