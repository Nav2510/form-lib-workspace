import { FormModel } from "../../../form/models/form.model";

export const BASIC_CONFIG: FormModel[] = [
  {
    label: 'Label',
    name: 'label',
    subType: 'text',
    type: 'input',
    placeholder: 'Enter the question here.'
  },
  {
    label: 'Name',
    name: 'name',
    subType: 'text',
    type: 'input',
    placeholder: 'Will be used as field name.'
  },
  {
    label: 'Value',
    name: 'value',
    subType: 'text',
    type: 'input',
    placeholder: 'Will be set as default value.'
  },
  {
    label: 'Sub-type',
    name: 'subType',
    type: 'dropdown',
    placeholder: 'Select subtype for input.',
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
  {
    label: 'Classes',
    name: 'classes',
    type: 'dropdown',
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
  {
    label: 'Placeholder',
    name: 'placeholder',
    subType: 'text',
    type: 'input',
    placeholder: 'Placeholder for field'
  },
  {
    label: 'Required Field',
    name: 'required',
    subType: 'text',
    type: 'checkbox',
  },
];