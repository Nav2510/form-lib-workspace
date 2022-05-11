import { Component } from '@angular/core';

import { ObjectMapperService } from '../../../../../../../../shared/services/object-mapper.service';
import { FORM_SETTING_CONFIG } from './contants/form-setting-config.constant';
import { FormSettingModel } from './models/form-setting.model';

@Component({
  selector: 'app-form-setting-config',
  templateUrl: './form-setting-config.component.html',
  styleUrls: ['./form-setting-config.component.scss'],
})
export class FormSettingConfigComponent {
  FORM_SETTING_CONFIG = FORM_SETTING_CONFIG;

  constructor(private mapperService: ObjectMapperService) {}

  onValueChanges(value: {[key: string]: string}): void {
    const createdObj: FormSettingModel = {
      header: value['header'],
      parentConfig: {
        appearance: value['parentConfig.appearance'],
        color: value['parentConfig.color'],
      },
    };
    this.mapperService.mapConfiguration(createdObj);
  }
}
