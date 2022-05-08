import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormConfigurationComponent } from './form-configuration.component';
import { ConfigListItemModule } from '../../../../shared/components/config-list-item/config-list-item.module';

@NgModule({
  declarations: [FormConfigurationComponent],
  imports: [CommonModule, ConfigListItemModule],
  exports: [FormConfigurationComponent],
})
export class FormConfigurationModule {}
