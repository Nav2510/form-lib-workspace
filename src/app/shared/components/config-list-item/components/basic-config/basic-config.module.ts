import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicConfigComponent } from './basic-config.component';
import { FormModule } from '../../../form/form.module';

@NgModule({
  declarations: [BasicConfigComponent],
  imports: [CommonModule, FormModule],
  exports: [BasicConfigComponent],
})
export class BasicConfigModule {}
