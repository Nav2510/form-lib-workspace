import { ConfigMenuModel } from "../../../../shared/models/config-menu.model";
import { ConfigTypeEnum } from "../../../../shared/models/config-type.model";

export const FORM_CONFIG_MENU: ConfigMenuModel[] = [
  {
    label: 'Appearance',
    src: '../../../../assets/icons/appearance.svg',
    nightThemeSrc: '../../../../assets/icons/appearance-dark.svg',
    configType: ConfigTypeEnum.Appearance,
  },
  {
    label: 'Dependencies',
    src: '../../../../assets/icons/dependency.svg',
    nightThemeSrc: '../../../../assets/icons/dependency-dark.svg',
    configType: ConfigTypeEnum.Dependency,
  },
];
export const FIELD_CONFIG_MENU: ConfigMenuModel[] = [
  {
    label: 'Input',
    src: '../../../../assets/icons/input.svg',
    nightThemeSrc: '../../../../assets/icons/input-dark.svg',
    type: 'input',
    configType: ConfigTypeEnum.Field,
  },
  {
    label: 'Textarea',
    src: '../../../../assets/icons/textarea.svg',
    nightThemeSrc: '../../../../assets/icons/textarea-dark.svg',
    type: 'textarea',
    configType: ConfigTypeEnum.Field,
  },
  {
    label: 'Checkbox',
    src: '../../../../assets/icons/checkbox.svg',
    nightThemeSrc: '../../../../assets/icons/checkbox-dark.svg',
    type: 'checkbox',
    configType: ConfigTypeEnum.Field,
  },
  {
    label: 'Radio',
    src: '../../../../assets/icons/radio.svg',
    nightThemeSrc: '../../../../assets/icons/radio-dark.svg',
    type: 'radio',
    configType: ConfigTypeEnum.Field,
  },
  {
    label: 'Dropdown',
    src: '../../../../assets/icons/dropdown.svg',
    nightThemeSrc: '../../../../assets/icons/dropdown-dark.svg',
    type: 'dropdown',
    configType: ConfigTypeEnum.Field,
  },
  {
    label: 'Button',
    src: '../../../../assets/icons/buttons.svg',
    nightThemeSrc: '../../../../assets/icons/buttons-dark.svg',
    type: 'button',
    configType: ConfigTypeEnum.Field,
  },
];
