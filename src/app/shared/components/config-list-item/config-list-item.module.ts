import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { ConfigListItemComponent } from './config-list-item.component';

@NgModule({
  declarations: [ConfigListItemComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  exports: [ConfigListItemComponent],
})
export class ConfigListItemModule {}
