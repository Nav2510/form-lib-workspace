import { Component, OnInit } from '@angular/core';
import { Config } from 'ngx-form-lib';
import { Observable } from 'rxjs';

import { ObjectMapperService } from '../../../../shared/services/object-mapper.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss'],
})
export class FormViewerComponent implements OnInit {
  config$!: Observable<Config | null>;
  formValue = {};

  constructor(private mapperService: ObjectMapperService) {}

  ngOnInit(): void {
    this.config$ = this.mapperService.masterConfig$;
  }

  // TODO: Fix in library
  onFormSubmit(): void {
    console.log(this.formValue);
  }

  onValueChanges(value: any): void {
    this.formValue = value;
  }
}
