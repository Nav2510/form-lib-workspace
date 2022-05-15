import { Component } from '@angular/core';

import { ObjectMapperService } from '../../../../shared/services/object-mapper.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss'],
})
export class FormViewerComponent {
  config$ = this.mapperService.masterConfig$;
  formValue = {};

  constructor(private mapperService: ObjectMapperService) {}

  // TODO: Fix in library
  onFormSubmit(): void {
    console.log(this.formValue)
  }

  onValueChanges(value: any): void {
    this.formValue = value;
  }
}
