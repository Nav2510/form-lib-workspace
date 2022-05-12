import { FormModel } from "../../../../../../../../shared/components/form/models/form.model";

const BASE_ADVANCE_CONFIG: FormModel[] = [
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
];

const HINT: FormModel = {
  label: 'Hint',
  name: 'hint',
  subType: 'text',
  type: 'input',
  placeholder: 'Help user what to fill.',
};

const PREFIX_SUFFIX: FormModel[] = [
  {
    label: 'Prefix Type',
    name: 'prefix.type',
    type: 'dropdown',
    placeholder: 'Select prefix for input.',
    aboveSeparator: true,
    options: [
      {
        label: 'Icon',
        value: 'icon',
      },
      {
        label: 'String',
        value: 'string',
      },
    ],
  },
  {
    label: 'Prefix Value',
    name: 'prefix.value',
    type: 'input',
    placeholder: 'For icons type enter mat icon value.',
    subType: 'text',
    belowSeparator: true,
  },
  {
    label: 'Suffix Type',
    name: 'suffix.type',
    type: 'dropdown',
    placeholder: 'Select suffix for input.',
    options: [
      {
        label: 'Icon',
        value: 'icon',
      },
      {
        label: 'String',
        value: 'string',
      },
    ],
  },
  {
    label: 'Suffix Value',
    name: 'suffix.value',
    type: 'input',
    placeholder: 'For icons type enter mat icon value.',
    subType: 'text',
  },
];

const ADD_FIELD: FormModel = {
  label: 'Add Field',
  name: '_submit_',
  type: 'submit',
};

export const getInputAdvance = (): FormModel[] => {
  return [...BASE_ADVANCE_CONFIG, HINT, ...PREFIX_SUFFIX, ADD_FIELD];
};

export const getTextareaAdvance = (): FormModel[] => {
  return [...BASE_ADVANCE_CONFIG, HINT, ...PREFIX_SUFFIX, ADD_FIELD];
};