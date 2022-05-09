import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ConfigType } from '../../models/config-type.model';

@Component({
  selector: 'app-config-list-item',
  templateUrl: './config-list-item.component.html',
  styleUrls: ['./config-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigListItemComponent {
  @Input() config: { label: string; src?: string; type?: string } | null = null;
  @Input() configType: ConfigType = 'field';
}
