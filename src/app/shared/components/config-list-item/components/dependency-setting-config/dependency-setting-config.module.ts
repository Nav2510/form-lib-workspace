import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencySettingConfigComponent } from './dependency-setting-config.component';

@NgModule({
  declarations: [DependencySettingConfigComponent],
  imports: [CommonModule],
  exports: [DependencySettingConfigComponent],
})
export class DependencySettingConfigModule {}
