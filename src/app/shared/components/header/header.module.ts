import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';
import { ThemeModule } from '../../directives/theme/theme.module';

const MATERIAL_MODULES  = [MatButtonModule, MatIconModule]

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ...MATERIAL_MODULES, ThemeModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
