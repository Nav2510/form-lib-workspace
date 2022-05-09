import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { AdvanceSettingConfigModule } from '../advance-setting-config/advance-setting-config.module';
import { BasicSettingConfigModule } from '../basic-setting-config/basic-setting-config.module';
import { FieldConfigurationComponent } from './field-configuration.component';
import { DependencySettingConfigModule } from '../dependency-setting-config/dependency-setting-config.module';
import { FormSettingConfigModule } from '../form-setting-config/form-setting-config.module';
import { SectionSettingConfigModule } from '../section-setting-config/section-setting-config.module';
import { FormDependencySettingConfigModule } from '../form-dependency-setting-config/form-dependency-setting-config.module';

@NgModule({
  declarations: [FieldConfigurationComponent],
  imports: [
    AdvanceSettingConfigModule,
    BasicSettingConfigModule,
    CommonModule,
    DependencySettingConfigModule,
    FormDependencySettingConfigModule,
    FormSettingConfigModule,
    MatTabsModule,
    SectionSettingConfigModule,
  ],
  exports: [FieldConfigurationComponent],
})
export class FieldConfigurationModule {}
