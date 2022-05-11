import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSettingConfigComponent } from './basic-setting-config.component';
import { FormModule } from '../../../../../../../../shared/components/form/form.module';

@NgModule({
  declarations: [BasicSettingConfigComponent],
  imports: [CommonModule, FormModule],
  exports: [BasicSettingConfigComponent],
})
export class BasicSettingConfigModule {}
