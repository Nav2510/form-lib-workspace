import { FormModel } from "../../../../../../../../../shared/components/form/models/form.model";

export const FORM_SETTING_CONFIG: FormModel[] = [
  {
    label: 'Form Header',
    name: 'header',
    subType: 'text',
    type: 'input',
    placeholder: 'Enter heading of form.'
  },
  {
    label: 'Theme Appearance',
    name: 'parentConfig.appearance',
    type: 'dropdown',
    placeholder: "Overridden from field's appearance.",
    options: [
      {
        label: 'Fill',
        value: 'fill',
      },
      {
        label: 'Legacy',
        value: 'legacy',
      },
      {
        label: 'Outline',
        value: 'outline',
      },
      {
        label: 'Standard',
        value: 'standard',
      },
    ],
  },
  {
    label: 'Theme Color',
    name: 'parentConfig.color',
    type: 'dropdown',
    placeholder: "Overridden from field's color.",
    options: [
      {
        label: 'Accent',
        value: 'accent',
      },
      {
        label: 'Basic',
        value: '',
      },
      {
        label: 'Primary',
        value: 'primary',
      },
      {
        label: 'Warn',
        value: 'warn',
      },
    ],
  },
];
