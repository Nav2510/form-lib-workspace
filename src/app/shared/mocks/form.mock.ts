import { ParentConfig, FormField, FormConfig, Textarea, Button } from 'ngx-form-lib';

const GET_STARTED = `GET STARTED. 
Here you can create your custom form and can directly use in "ngx-form-lib" package with all the configuration provided. Once you have created your desired form, just copy the json configuration and pass it as "config" in ngx-form-lib selector in your application.
Try changing Form Header and appearance in "Appearance Section". 
For more info go through Doc on "https://www.npmjs.com/package/ngx-form-lib"`;


export const MASTER_CONFIG: FormConfig = {
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
          field: new FormField({
            name: 'info',
            label: 'Get Started',
            value: GET_STARTED,
            order: 1,
            classes: ['ngf-col-12'],
          }),
        }),
        new Button({
          attribute: 'mat-flat-button',
          subType: 'submit',
          field: new FormField({
            label: 'View in console',
            order: 1,
            color: 'primary',
            classes: ['ngf-col-6']
          }),
        }),
      ],
    },
  ],
};
