import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { AdvanceSettingConfigModule } from './components/advance-setting-config/advance-setting-config.module';
import { FieldConfigurationComponent } from './field-configuration.component';
import { FormSettingConfigModule } from './components/form-setting-config/form-setting-config.module';
import { FormDependencySettingConfigModule } from './components/form-dependency-setting-config/form-dependency-setting-config.module';
import { BasicSettingConfigModule } from './components/basic-setting-config/basic-setting-config.module';
import { SectionSettingConfigModule } from './components/section-setting-config/section-setting-config.module';
import { DependencySettingConfigModule } from './components/dependency-setting-config/dependency-setting-config.module';

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
