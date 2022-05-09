import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { AdvanceConfigModule } from '../advance-config/advance-config.module';
import { BasicConfigModule } from '../basic-config/basic-config.module';
import { DependencyConfigModule } from '../dependency-config/dependency-config.module';
import { FieldConfigurationComponent } from './field-configuration.component';

@NgModule({
  declarations: [FieldConfigurationComponent],
  imports: [
    AdvanceConfigModule,
    BasicConfigModule,
    CommonModule,
    DependencyConfigModule,
    MatTabsModule,
  ],
  exports: [FieldConfigurationComponent],
})
export class FieldConfigurationModule {}
