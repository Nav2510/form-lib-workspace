import { ButtonAttributeEnum } from 'ngx-form-lib';
import { FormModel } from '../../../../../../../../../shared/components/form/models/form.model';
import { FormProperties } from '../../../../../../../../../shared/enums/form-properties.enum';

const BASE_CONFIG: FormModel[] = [
  {
    label: 'Label',
    name: FormProperties.Label,
    subType: 'text',
    type: 'input',
    placeholder: 'Enter the question here.',
  },
  {
    label: 'Name',
    name: FormProperties.Name,
    subType: 'text',
    type: 'input',
    placeholder: 'Will be used as field name.',
    required: true,
  },
  {
    label: 'Value',
    name: FormProperties.Value,
    subType: 'text',
    type: 'input',
    placeholder: 'Will be set as default value.',
  },
];

const CLASSES: FormModel = {
  label: 'Classes',
  name: FormProperties.Classes,
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
};

const REQUIRED: FormModel[] = [
  {
    aboveSeparator: true,
    label: 'Required Field',
    name: FormProperties.Required,
    subType: 'text',
    type: 'checkbox',
  },
  {
    label: 'Required Error Message',
    name: FormProperties.RequiredMsg,
    subType: 'text',
    type: 'input',
    placeholder: 'Error message',
  },
];

const PLACEHOLDER: FormModel = {
  label: 'Placeholder',
  name: FormProperties.Placeholder,
  subType: 'text',
  type: 'input',
  placeholder: 'Placeholder for field',
};

const ADD_FIELD_BUTTON: FormModel = {
  label: 'Add Field',
  name: FormProperties.Submit,
  type: 'submit',
};

const SUB_TYPE: FormModel = {
  label: 'Sub-type',
  name: FormProperties.SubType,
  type: 'dropdown',
  placeholder: 'Select subtype for input.',
  required: true,
  options: [
    {
      label: 'Text',
      value: 'text',
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
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Button',
      value: 'button',
    },
    {
      label: 'Reset',
      value: 'reset',
    },
    {
      label: 'Submit',
      value: 'submit',
    },
  ],
};

const LABEL_POSITION: FormModel = {
  label: 'Label Position',
  name: FormProperties.LabelPosition,
  type: 'dropdown',
  placeholder: 'Select where label should be placed',
  required: true,
  aboveSeparator: true,
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
  name: FormProperties.Indeterminate,
  type: 'checkbox',
};

const INLINE: FormModel = {
  label: 'Show Inline',
  name: FormProperties.ShowInline,
  type: 'checkbox',
};

const ROWS: FormModel = {
  label: 'Number of Rows',
  name: FormProperties.Rows,
  type: 'input',
  subType: 'text',
  placeholder: 'Number of rows to display on content',
};

const OPTIONS: FormModel = {
  label: 'Options',
  name: FormProperties.Options,
  type: 'input',
  placeholder: 'Label:Value',
  belowSeparator: true,
  aboveSeparator: true,
  isAddable: true,
};

const MULTI: FormModel = {
  label: 'Multiple select',
  name: FormProperties.Multiple,
  type: 'checkbox',
  aboveSeparator: true
};

const BUTTONS: FormModel[] = [
  {
    label: 'Label',
    name: FormProperties.Label,
    subType: 'text',
    type: 'input',
    placeholder: 'Enter the label or mat icon name',
  },
  {
    label: 'Sub-type',
    name: FormProperties.SubType,
    type: 'dropdown',
    placeholder: 'Select subtype for button',
    required: true,
    options: [
      // {
      //   label: 'Button',
      //   value: 'button',
      // },
      // {
      //   label: 'Reset',
      //   value: 'reset',
      // },
      {
        label: 'Submit',
        value: 'submit',
      },
    ],
  },
  {
    label: 'Attribute',
    name: FormProperties.Attribute,
    type: 'dropdown',
    placeholder: 'Select attribute type',
    required: true,
    options: [
      {
        label: 'Mat Button',
        value: ButtonAttributeEnum.MatButton,
      },
      {
        label: 'Mat Raised Button',
        value: ButtonAttributeEnum.MatRaisedButton,
      },
      {
        label: 'Mat Flat Button',
        value: ButtonAttributeEnum.MatFlatButton,
      },
      {
        label: 'Mat Stroked Button',
        value: ButtonAttributeEnum.MatStrokedButton,
      },
      {
        label: 'Mat Icon Button',
        value: ButtonAttributeEnum.MatIconButton,
      },
      {
        label: 'Mat Fab',
        value: ButtonAttributeEnum.MatFab,
      },
      {
        label: 'Mat Mini Fab',
        value: ButtonAttributeEnum.MatMiniFab,
      },
    ],
  },
];

export const getInputBasic = (): FormModel[] => {
  return [
    ...BASE_CONFIG,
    CLASSES,
    SUB_TYPE,
    PLACEHOLDER,
    ...REQUIRED,
    ADD_FIELD_BUTTON,
  ];
};

export const getTextareaBasic = (): FormModel[] => {
  return [
    ...BASE_CONFIG,
    CLASSES,
    PLACEHOLDER,
    ROWS,
    ...REQUIRED,
    ADD_FIELD_BUTTON,
  ];
};

export const getCheckboxBasic = (): FormModel[] => {
  return [
    ...BASE_CONFIG,
    CLASSES,
    LABEL_POSITION,
    INDETERMINATE,
    INLINE,
    ADD_FIELD_BUTTON,
  ];
};

export const getRadioBasic = (): FormModel[] => {
  return [...BASE_CONFIG, CLASSES, OPTIONS, INLINE, ADD_FIELD_BUTTON];
};

export const getButtonBasic = (): FormModel[] => {
  return [...BUTTONS, CLASSES, ADD_FIELD_BUTTON];
};

export const getDropdownBasic = (): FormModel[] => {
  return [
    ...BASE_CONFIG,
    CLASSES,
    PLACEHOLDER,
    MULTI,
    ...REQUIRED,
    OPTIONS,
    ADD_FIELD_BUTTON,
  ];
};
