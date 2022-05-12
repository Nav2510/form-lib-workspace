import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormResponseModel } from '../../../../../../../../shared/components/form/models/form-response.model';
import { ObjectMapperService } from '../../../../../../../../shared/services/object-mapper.service';

import { BASIC_CONFIG } from './contants/basic.constant';

@Component({
  selector: 'app-basic-setting-config',
  templateUrl: './basic-setting-config.component.html',
  styleUrls: ['./basic-setting-config.component.scss'],
})
export class BasicSettingConfigComponent {
  @Input() controlType: string | null = null;

  BASIC_CONFIG = BASIC_CONFIG;
  formValue: { [key: string]: string } | null = null;

  constructor(private mapperService: ObjectMapperService) {}

  onValueChanges({ value }: FormResponseModel): void {
    this.formValue = value;
  }

  onSubmit(): void {
    this.formValue && this.controlType ? this.mapperService.addField(this.formValue, this.controlType): '';
  }
}
