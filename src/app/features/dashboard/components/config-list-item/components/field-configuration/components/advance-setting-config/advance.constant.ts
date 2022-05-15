import { FormModel } from "../../../../../../../../shared/components/form/models/form.model";
import { FormProperties } from "../../../../../../../../shared/enums/form-properties.enum";

const BASE_ADVANCE_CONFIG: FormModel[] = [
  {
    label: 'Field Appearance',
    name: FormProperties.Appearance,
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
    name: FormProperties.Color,
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
  name: FormProperties.Hint,
  subType: 'text',
  type: 'input',
  placeholder: 'Help user what to fill.',
};

const PREFIX_SUFFIX: FormModel[] = [
  {
    label: 'Prefix Type',
    name: FormProperties.PrefixType,
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
    name: FormProperties.PrefixValue,
    type: 'input',
    placeholder: 'For icons type enter mat icon value.',
    subType: 'text',
    belowSeparator: true,
  },
  {
    label: 'Suffix Type',
    name: FormProperties.SuffixType,
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
    name: FormProperties.SuffixValue,
    type: 'input',
    placeholder: 'For icons type enter mat icon value.',
    subType: 'text',
  },
];

const ADD_FIELD: FormModel = {
  label: 'Add Field',
  name: FormProperties.Submit,
  type: 'submit',
};

export const getInputAdvance = (): FormModel[] => {
  return [...BASE_ADVANCE_CONFIG, HINT, ...PREFIX_SUFFIX, ADD_FIELD];
};

export const getTextareaAdvance = (): FormModel[] => {
  return [...BASE_ADVANCE_CONFIG, HINT, ...PREFIX_SUFFIX, ADD_FIELD];
};