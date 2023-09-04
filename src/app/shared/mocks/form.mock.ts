import {
  ParentConfig,
  Field,
  Config,
  Textarea,
  Button,
  Dropdown,
  Input,
  Checkbox,
} from 'ngx-form-lib';

const GET_STARTED = `GET STARTED. 
Here you can create your custom form and can directly use in "ngx-form-lib" package with all the configuration provided. Once you have created your desired form, just copy the json configuration and pass it as "config" in ngx-form-lib selector in your application.
Try changing Form Header and appearance in "Appearance Section". 
For more info go through Doc on "https://www.npmjs.com/package/ngx-form-lib"`;

export const MASTER_CONFIG: Config = {
  header: 'Demo Awesome Form',
  parentConfig: new ParentConfig({
    appearance: 'outline',
    color: 'primary',
  }),
  sections: [
    {
      sectionHeader: 'General Guide',
      fields: [
        new Textarea({
          rows: 8,
          field: new Field({
            name: 'info',
            label: 'Get Started',
            value: GET_STARTED,
            order: 1,
            classes: ['ngf-col-12'],
          }),
        }),
        new Checkbox({
          field: new Field({
            classes: ['ngf-col-12'],
            name: 'set_value',
            label: 'Set Form type to Dynamic',
            order: 2
          }),
        }),
        new Dropdown({
          field: new Field({
            classes: ['ngf-col-12'],
            hint: '',
            label: 'Form type',
            name: 'form',
            order: 5,
            placeholder: 'Select form type',
            value: '',
            facets: {
              dependencies: [{
                fieldPath: 'set_value',
                type: 'value-change',
                value: true,
                setDependentValueTo: 'dynamic'
              }]
            },
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Select at least one value',
              },
            ],
          }),
          options: [
            {
              label: 'Dynamic',
              value: 'dynamic',
            },
            {
              label: 'Reactive',
              value: 'reactive',
            },
          ],
        }),
        new Checkbox({
          field: new Field({
            classes: ['ngf-col-6'],
            name: 'disable_input',
            label: 'Disable input text',
            order: 10
          }),
        }),
        new Checkbox({
          field: new Field({
            classes: ['ngf-col-6'],
            name: 'hide_input',
            label: 'Hide input text',
            order: 15,
          }),
        }),
        new Input({
          field: new Field({
            label: "Isn't dynamic form awesome!!",
            name: 'dynamic-form',
            order: 20,
            facets: {
              disabled: false,
              hidden: false,
              dependencies: [
                {
                  fieldPath: 'disable_input',
                  type: 'disabled',
                  value: true,
                  setDependentValueTo: true,
                },
                {
                  fieldPath: 'hide_input',
                  type: 'hidden',
                  value: true,
                  setDependentValueTo: true,
                }
              ],
            },
            classes: ['ngf-col-12'],
          }),
        }),
        new Button({
          attribute: 'mat-flat-button',
          subType: 'submit',
          field: new Field({
            label: 'View in console',
            order: 40,
            color: 'primary',
            name: 'submit',
            classes: ['ngf-col-6'],
          }),
        }),
      ],
    },
  ],
};
