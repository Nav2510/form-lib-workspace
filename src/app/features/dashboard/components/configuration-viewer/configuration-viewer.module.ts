import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ConfigurationViewerComponent } from './configuration-viewer.component';
import { ThemeModule } from '../../../../shared/directives/theme/theme.module';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule];

@NgModule({
  declarations: [ConfigurationViewerComponent],
  imports: [CommonModule, ThemeModule, ...MATERIAL_MODULES],
  exports: [ConfigurationViewerComponent],
})
export class ConfigurationViewerModule {}
