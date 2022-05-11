import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSettingConfigComponent } from './form-setting-config.component';
import { FormModule } from '../../../../../../../../shared/components/form/form.module';

@NgModule({
  declarations: [FormSettingConfigComponent],
  imports: [CommonModule, FormModule],
  exports: [FormSettingConfigComponent],
})
export class FormSettingConfigModule {}
