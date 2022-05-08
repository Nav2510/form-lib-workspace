import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationViewerComponent } from './configuration-viewer.component';

@NgModule({
  declarations: [ConfigurationViewerComponent],
  imports: [CommonModule],
  exports: [ConfigurationViewerComponent],
})
export class ConfigurationViewerModule {}
