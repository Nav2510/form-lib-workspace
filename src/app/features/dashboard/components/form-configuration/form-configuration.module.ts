import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { FormConfigurationComponent } from './form-configuration.component';
import { ConfigListItemModule } from '../config-list-item/config-list-item.module';

@NgModule({
  declarations: [FormConfigurationComponent],
  imports: [CommonModule, ConfigListItemModule, MatExpansionModule],
  exports: [FormConfigurationComponent],
})
export class FormConfigurationModule {}
