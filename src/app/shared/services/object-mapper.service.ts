import { Injectable } from '@angular/core';
import { Button, Checkbox, Dropdown, FormConfig, FormField, Input, PrefixSuffix, Radio, Textarea, Validation, ValidationType, ValidationTypeEnum } from 'ngx-form-lib';
import { BehaviorSubject } from 'rxjs';
import { OptionModel } from '../components/form/models/option.model';
import { FormService } from '../components/form/services/form.service';
import { FormProperties } from '../enums/form-properties.enum';

import { MASTER_CONFIG } from '../mocks/form.mock';

@Injectable({
  providedIn: 'root',
})
export class ObjectMapperService {
  masterConfig$ = new BehaviorSubject<FormConfig>(MASTER_CONFIG);

  constructor(private formService: FormService) {}

  mapConfiguration(propertyObject: object): void {
    const masterObj = this.masterConfig$.getValue();
    const mapped = { ...masterObj, ...propertyObject };

    this.masterConfig$.next(JSON.parse(JSON.stringify(mapped)));
  }

  // TODO: Create enum or type for controlType
  createFieldObject(
    values: { [key: string]: string },
    controlType: string
  ): any {
    switch (controlType) {
      case 'input': {
        return this.createInput(values);
      }
      case 'textarea': {
        return this.createTextarea(values);
      }
      case 'checkbox': {
        return this.createCheckbox(values);
      }
      case 'radio': {
        return this.createRadio(values);
      }
      case 'dropdown': {
        return this.createDropdown(values);
      }
      case 'button': {
        return this.createButton(values);
      }
      default: {
        return {} as FormField<string>;
      }
    }
  }

  addField(values: { [key: string]: string }, controlType: string): void {
    const masterObj = this.masterConfig$.getValue();
    const createdField = this.createFieldObject(values, controlType);

    masterObj.sections[0].fields.push(createdField);
    this.masterConfig$.next(JSON.parse(JSON.stringify(masterObj)));
    this.formService.reset();
  }

  createInput(values: { [key: string]: any }): Input {
    return new Input({
      field: this.createFormField(values),
      subType: values[FormProperties.SubType],
      prefix: this.createPrefix(values),
      suffix: this.createSuffix(values),
    });
  }

  createButton(values: { [key: string]: any }): Button {
    return new Button({
      attribute: values[FormProperties.Attribute],
      subType: values[FormProperties.SubType],
      field: this.createFormField(values)
    });
  }

  createTextarea(values: { [key: string]: any }): Textarea {
    return new Textarea({
      field: this.createFormField(values),
      prefix: this.createPrefix(values),
      suffix: this.createSuffix(values),
      rows: values[FormProperties.Rows]
    });
  }

  createCheckbox(values: { [key: string]: any }): Checkbox {
    return new Checkbox({
      field: this.createFormField(values),
      indeterminate: values[FormProperties.Indeterminate],
      labelPosition: values[FormProperties.LabelPosition],
      showInline: values[FormProperties.ShowInline],
    });
  }

  createRadio(values: { [key: string]: any }): Radio {
    return new Radio({
      options: this.createOptionsList(values[FormProperties.Options]),
      showInline: values[FormProperties.ShowInline],
      field: this.createFormField(values),
    });
  }

  createDropdown(values: { [key: string]: any }): Dropdown {
    return new Dropdown({
      field: this.createFormField(values),
      prefix: this.createPrefix(values),
      suffix: this.createSuffix(values),
      options: this.createOptionsList(values[FormProperties.Options]),
    });
  }

  createOptionsList(options: string[]): OptionModel[] {
    return options.map((optionItem) => {
      if (!optionItem) {
        return {} as OptionModel;
      }
      const parsedValue = optionItem.split(':');
      const obj: OptionModel = {
        label: parsedValue[0],
        value: parsedValue[1],
      };
      return obj;
    });
  }

  createPrefix(values: { [key: string]: any }): PrefixSuffix {
    return {
      type: values[FormProperties.PrefixType],
      value: values[FormProperties.PrefixValue],
    };
  }

  createSuffix(values: { [key: string]: any }): PrefixSuffix {
    return {
      type: values[FormProperties.SuffixType],
      value: values[FormProperties.SuffixValue],
    };
  }

  createValidators(
    ...validationTypeList: {
      type: string;
      value?: string | boolean;
      msg?: string;
    }[]
  ): Validation[] {
    const validators: Validation[] = [];

    validationTypeList.forEach((validationObj) => {
      if (validationObj.value) {
        validators.push({
          type: validationObj.type as ValidationType,
          value: validationObj.value ? validationObj.value : true,
          message: validationObj.msg
        });
      }
    });

    return validators;
  }

  createFormField(values: { [key: string]: any }): FormField<string> {
    return new FormField<string>({
      appearance: values['appearance'],
      classes: values['classes'],
      color: values['color'],
      hint: values['hint'],
      label: values['label'],
      name: values['name'],
      placeholder: values['placeholder'],
      value: values['value'],
      validators: this.createValidators({
        type: FormProperties.Required,
        value: values[FormProperties.Required],
        msg: values[FormProperties.RequiredMsg]
      }),
    });
  }
}
