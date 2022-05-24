import { Component, Input, OnInit } from '@angular/core';

import { FormResponseModel } from '../../../../../../../../shared/components/form/models/form-response.model';
import { FormModel } from '../../../../../../../../shared/components/form/models/form.model';
import { ObjectMapperService } from '../../../../../../../../shared/services/object-mapper.service';
import { getButtonBasic, getCheckboxBasic, getDropdownBasic, getInputBasic, getRadioBasic, getTextareaBasic } from './contants/basic.constant';

@Component({
  selector: 'app-basic-setting-config',
  templateUrl: './basic-setting-config.component.html',
  styleUrls: ['./basic-setting-config.component.scss'],
})
export class BasicSettingConfigComponent implements OnInit{
  @Input() controlType: string | null = null;

  basicConfig: FormModel[] = [];
  formValue: { [key: string]: string } | null = null;

  constructor(private mapperService: ObjectMapperService) {}

  ngOnInit(): void {
    switch (this.controlType) {
      case 'input': {
        this.basicConfig = getInputBasic();
        break;
      }
      case 'textarea': {
        this.basicConfig = getTextareaBasic();
        break;
      }
      case 'checkbox': {
        this.basicConfig = getCheckboxBasic();
        break;
      }
      case 'radio': {
        this.basicConfig = getRadioBasic();
        break;
      }
      case 'button': {
        this.basicConfig = getButtonBasic();
        break;
      }
      case 'dropdown': {
        this.basicConfig = getDropdownBasic();
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
