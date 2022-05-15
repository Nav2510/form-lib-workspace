import { EventEmitter, Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormModel } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  reset$ = new EventEmitter<void>();

  initForm(config: FormModel[]): FormGroup {
    const obj: { [key: string]: FormControl | FormArray } = {};

    config.forEach((configItem) => {
      if (configItem.isAddable) {
        obj[configItem.name] = new FormArray([])
      } else {
        obj[configItem.name] = new FormControl(
          configItem.value,
          configItem.required ? Validators.required : null
        );
      }
    });
    return new FormGroup(obj);
  }

  reset(): void {
    this.reset$.emit();
  }
}
