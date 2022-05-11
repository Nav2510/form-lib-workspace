import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSettingConfigComponent } from './section-setting-config.component';
import { FormModule } from '../../../../../../../../shared/components/form/form.module';

@NgModule({
  declarations: [SectionSettingConfigComponent],
  imports: [CommonModule, FormModule],
  exports: [SectionSettingConfigComponent],
})
export class SectionSettingConfigModule {}
