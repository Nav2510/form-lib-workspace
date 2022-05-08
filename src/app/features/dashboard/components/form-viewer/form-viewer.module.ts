import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLibModule } from 'ngx-form-lib';

import { FormViewerComponent } from './form-viewer.component';

@NgModule({
  declarations: [FormViewerComponent],
  imports: [CommonModule, FormLibModule],
  exports: [FormViewerComponent],
})
export class FormViewerModule {}
