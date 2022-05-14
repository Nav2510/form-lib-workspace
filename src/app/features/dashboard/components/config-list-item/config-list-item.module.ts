import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { ConfigListItemComponent } from './config-list-item.component';
import { FieldConfigurationModule } from './components/field-configuration/field-configuration.module';
import { ThemeModule } from '../../../../shared/directives/theme/theme.module';

@NgModule({
  declarations: [ConfigListItemComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule, FieldConfigurationModule, ThemeModule],
  exports: [ConfigListItemComponent],
})
export class ConfigListItemModule {}
