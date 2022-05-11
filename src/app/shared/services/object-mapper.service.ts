import { Injectable } from '@angular/core';
import { FormConfig } from 'ngx-form-lib';
import { BehaviorSubject } from 'rxjs';

import { MASTER_CONFIG } from '../mocks/form.mock';

@Injectable({
  providedIn: 'root',
})
export class ObjectMapperService {
  masterConfig$ = new BehaviorSubject<FormConfig>(MASTER_CONFIG);

  mapConfiguration(propertyObject: object): void {
    const masterObj = this.masterConfig$.getValue();
    const mapped  = {...masterObj, ...propertyObject}

    this.masterConfig$.next(JSON.parse(JSON.stringify(mapped)));
  }
}
