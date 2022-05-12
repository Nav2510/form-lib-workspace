import { Component, Input, OnInit } from '@angular/core';
import { FormResponseModel } from '../../../../../../../../shared/components/form/models/form-response.model';
import { FormModel } from '../../../../../../../../shared/components/form/models/form.model';
import { ObjectMapperService } from '../../../../../../../../shared/services/object-mapper.service';

import { getInputAdvance, getTextareaAdvance } from './advance.constant';

@Component({
  selector: 'app-advance-setting-config',
  templateUrl: './advance-setting-config.component.html',
  styleUrls: ['./advance-setting-config.component.scss'],
})
export class AdvanceSettingConfigComponent implements OnInit {
  @Input() controlType: string | null = null;

  advanceConfig: FormModel[] = [];
  formValue: { [key: string]: string } | null = null;

  constructor(private mapperService: ObjectMapperService) {}

  ngOnInit(): void {
    switch (this.controlType) {
      case 'input': {
        this.advanceConfig = getInputAdvance();
        break;
      }
      case 'textarea': {
        this.advanceConfig = getTextareaAdvance();
        break;
      }
    }
  }

  onValueChanges({ value }: FormResponseModel): void {
    this.formValue = value;
  }

  onSubmit(): void {
    this.formValue && this.controlType
      ? this.mapperService.addField(this.formValue, this.controlType)
      : '';
  }
}
