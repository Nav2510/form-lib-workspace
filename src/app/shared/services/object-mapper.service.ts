import { EventEmitter, Injectable } from '@angular/core';
import { FormConfig, FormField, Input, Textarea } from 'ngx-form-lib';
import { BehaviorSubject } from 'rxjs';
import { FormService } from '../components/form/services/form.service';

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

  // TODO: Created enum or type for controlType
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
      subType: values['subType'],
    });
  }

  createTextarea(values: { [key: string]: any }): Textarea {
    return new Textarea({
      field: this.createFormField(values),
    });
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
    });
  }
}
