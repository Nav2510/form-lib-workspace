import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyConfigComponent } from './dependency-config.component';

@NgModule({
  declarations: [DependencyConfigComponent],
  imports: [CommonModule],
  exports: [DependencyConfigComponent],
})
export class DependencyConfigModule {}
