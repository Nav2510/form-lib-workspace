import { ParentConfig, Input, FormField, FormConfig } from 'ngx-form-lib';


export const MASTER_CONFIG: FormConfig = {
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
      ],
    },
  ],
};
