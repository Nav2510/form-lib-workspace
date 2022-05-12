import { FormModel } from '../../../../../../../../../shared/components/form/models/form.model';

const BASE_CONFIG: FormModel[] = [
  {
    label: 'Label',
    name: 'label',
    subType: 'text',
    type: 'input',
    placeholder: 'Enter the question here.',
  },
  {
    label: 'Name',
    name: 'name',
    subType: 'text',
    type: 'input',
    placeholder: 'Will be used as field name.',
    required: true,
  },
  {
    label: 'Value',
    name: 'value',
    subType: 'text',
    type: 'input',
    placeholder: 'Will be set as default value.',
  },
  {
    label: 'Classes',
    name: 'classes',
    type: 'dropdown',
    required: true,
    placeholder: 'Select classes for layout',
    multi: true,
    options: [
      {
        label: 'Col-12',
        value: 'ngf-col-12',
      },
      {
        label: 'Col-10',
        value: 'ngf-col-10',
      },
      {
        label: 'Col-8',
        value: 'ngf-col-8',
      },
      {
        label: 'Col-6',
        value: 'ngf-col-6',
      },
      {
        label: 'Col-4',
        value: 'ngf-col-4',
      },
      {
        label: 'Col-3',
        value: 'ngf-col-3',
      },
      {
        label: 'Col-2',
        value: 'ngf-col-2',
      },
      {
        label: 'Col-1',
        value: 'ngf-col-1',
      },
      {
        label: 'Fit-content',
        value: 'ngf-fit-content',
      },
    ],
  },
];

const REQUIRED: FormModel = {
  label: 'Required Field',
  name: 'required',
  subType: 'text',
  type: 'checkbox',
};

const PLACEHOLDER: FormModel = {
  label: 'Placeholder',
  name: 'placeholder',
  subType: 'text',
  type: 'input',
  placeholder: 'Placeholder for field',
};

const ADD_FIELD: FormModel = {
  label: 'Add Field',
  name: '_submit_',
  type: 'submit',
};

const SUB_TYPE: FormModel = {
  label: 'Sub-type',
  name: 'subType',
  type: 'dropdown',
  placeholder: 'Select subtype for input.',
  required: true,
  options: [
    {
      label: 'Button',
      value: 'button',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Number',
      value: 'number',
    },
    {
      label: 'Password',
      value: 'password',
    },
    {
      label: 'Reset',
      value: 'reset',
    },
    {
      label: 'Submit',
      value: 'submit',
    },
    {
      label: 'Text',
      value: 'text',
    },
  ],
};

const LABEL_POSITION: FormModel = {
  label: 'Label Position',
  name: 'labelPosition',
  type: 'dropdown',
  placeholder: 'Select where label should be placed',
  required: true,
  aboveSeparator:true,
  options: [
    {
      label: 'Before',
      value: 'before',
    },
    {
      label: 'After',
      value: 'after',
    },
  ],
};

const INDETERMINATE: FormModel = {
  label: 'Show Indeterminate',
  name: 'indeterminate',
  type: 'checkbox',
};

const INLINE: FormModel = {
  label: 'Show Inline',
  name: 'showInline',
  type: 'checkbox',
};

const OPTIONS: FormModel = {
  label: 'Options',
  name: 'options',
  type: 'input',
  belowSeparator: true,
  aboveSeparator: true,
};


export const getInputBasic = (): FormModel[] => {
  return [...BASE_CONFIG, SUB_TYPE, PLACEHOLDER, REQUIRED, ADD_FIELD];
};

export const getTextareaBasic = (): FormModel[] => {
  return [...BASE_CONFIG, PLACEHOLDER, REQUIRED, ADD_FIELD];
};

export const getCheckboxBasic = (): FormModel[] => {
  return [...BASE_CONFIG, LABEL_POSITION, INDETERMINATE, INLINE, ADD_FIELD];
}

export const getRadioBasic = (): FormModel[] => {
  return [...BASE_CONFIG, OPTIONS, INLINE, ADD_FIELD];
};
