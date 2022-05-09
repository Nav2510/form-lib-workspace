import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { AdvanceSettingConfigModule } from '../advance-setting-config/advance-setting-config.module';
import { BasicSettingConfigModule } from '../basic-setting-config/basic-setting-config.module';
import { FieldConfigurationComponent } from './field-configuration.component';
import { DependencySettingConfigModule } from '../dependency-setting-config/dependency-setting-config.module';

@NgModule({
  declarations: [FieldConfigurationComponent],
  imports: [
    AdvanceSettingConfigModule,
    BasicSettingConfigModule,
    CommonModule,
    DependencySettingConfigModule,
    MatTabsModule,
  ],
  exports: [FieldConfigurationComponent],
})
export class FieldConfigurationModule {}
