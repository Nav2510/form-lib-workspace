import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceSettingConfigComponent } from './advance-setting-config.component';
import { FormModule } from '../../../form/form.module';

@NgModule({
  declarations: [AdvanceSettingConfigComponent],
  imports: [CommonModule, FormModule],
  exports: [AdvanceSettingConfigComponent],
})
export class AdvanceSettingConfigModule {}
