import { FormModel } from "../../../form/models/form.model";

export const ADVANCE_CONFIG: FormModel[] = [
  {
    label: 'Field Appearance',
    name: 'appearance',
    type: 'dropdown',
    placeholder: 'Will override form level appearance',
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
    label: 'Field Color',
    name: 'color',
    type: 'dropdown',
    placeholder: 'Will override form level color',
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
  {
    label: 'Hint',
    name: 'hint',
    subType: 'text',
    type: 'input',
    placeholder: 'Help user what to fill.',
    saparator: true,
  },

  {
    label: 'Prefix Type',
    name: 'prefixType',
    type: 'dropdown',
    options: [
      {
        label: 'String',
        value: 'string',
      },
      {
        label: 'Icon',
        value: 'icon',
      },
    ],
    placeholder: 'Display icon or string.',
  },
  {
    label: 'Prefix Value',
    name: 'prefixValue',
    type: 'input',
    subType: 'text',
    placeholder: 'Value for prefix',
    saparator: true,
  },
  {
    label: 'Suffix Type',
    name: 'suffixType',
    type: 'dropdown',
    options: [
      {
        label: 'String',
        value: 'string',
      },
      {
        label: 'Icon',
        value: 'icon',
      },
    ],
    placeholder: 'Display icon or string.',
  },
  {
    label: 'Suffix Value',
    name: 'suffixValue',
    type: 'input',
    subType: 'text',
    placeholder: 'Value for suffix.',
  },
];