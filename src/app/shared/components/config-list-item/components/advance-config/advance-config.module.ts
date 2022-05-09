import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceConfigComponent } from './advance-config.component';
import { FormModule } from '../../../form/form.module';

@NgModule({
  declarations: [AdvanceConfigComponent],
  imports: [CommonModule, FormModule],
  exports: [AdvanceConfigComponent],
})
export class AdvanceConfigModule {}
