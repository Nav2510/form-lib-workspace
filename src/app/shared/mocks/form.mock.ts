import { ParentConfig, Input, FormField, FormConfig } from 'ngx-form-lib';

export const CONFIG: FormConfig = {
  header: 'Form Header',
  parentConfig: new ParentConfig({
    appearance: 'outline',
    color: 'primary',
  }),
  sections: [
    {
      sectionHeader: 'Section Header',
      fields: [
        new Input({
          subType: 'text',
          field: new FormField({
            type: 'input',
            name: 'money',
            label: 'Enter your name',
            order: 1,
            classes: ['ngf-col-12'],
          }),
        }),

        new Input({
          subType: 'text',
          field: new FormField({
            type: 'input',
            color: 'accent',
            name: 'name',
            label: 'Name',
            order: 1,
            placeholder: 'Enter name',
            value: '',
            classes: ['ngf-col-4'],
            hint: 'Enter your name here',
          }),
        }),
        new Input({
          field: new FormField({
            label: 'Age',
            color: 'primary',
            type: 'input',
            name: 'age',
            order: 2,
            hint: 'Enter your age here',
            placeholder: 'Enter name',

            value: '26',
            classes: ['ngf-col-8'],
            validators: [
              {
                type: 'min',
                message: 'Value cannot be negative',
                value: 0,
              },
              {
                type: 'max',
                message: 'Value cannot be more than 100',
                value: 100,
              },
              {
                type: 'minlength',
                value: 10,
                showDynamicError: true,
                message: 'Minimum 10 character length required.',
              },
              {
                type: 'required',
                message: 'This field is mandatory',
                value: true,
              },
            ],
          }),
        }),
        new FormField<string>({
          color: 'accent',
          type: 'textarea',
          name: 'comment',
          label: 'Comment',
          order: 3,
          hint: 'Max length of comment should be 100',
          classes: ['ngf-col-12'],
          validators: [
            {
              type: 'required',
              value: true,
              message: 'This is required field edited.',
            },
            {
              type: 'minlength',
              value: 10,
              showDynamicError: true,
              message: 'Minimum 10 character length required.',
            },
            {
              type: 'maxlength',
              value: 100,
              message: 'Maximum 100 character length required.',
            },
          ],
        }),

        new Input({
          subType: 'email',
          field: new FormField({
            type: 'input',
            name: 'email',
            label: 'Email',
            classes: ['ngf-col-12'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'This is required field.',
              },
              {
                type: 'email',
                value: true,
                message: 'Incorrect email format',
              },
            ],
            order: 4,
          }),
        }),
      ],
    },
  ],
};
