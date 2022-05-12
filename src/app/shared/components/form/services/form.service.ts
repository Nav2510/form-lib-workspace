import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormModel } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  reset$ = new EventEmitter<void>();

  initForm(config: FormModel[]): FormGroup {
    const obj: { [key: string]: FormControl } = {};

    config.forEach((configItem) => {
      obj[configItem.name] = new FormControl(
        configItem.value,
        configItem.required ? Validators.required : null
      );
    });
    return new FormGroup(obj);
  }

  reset(): void {
    this.reset$.emit();
  }
}
