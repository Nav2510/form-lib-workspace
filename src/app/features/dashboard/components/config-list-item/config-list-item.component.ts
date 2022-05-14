import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ThemeEnum } from '../../../../shared/enums/theme.enum';
import { ConfigMenuModel } from '../../../../shared/models/config-menu.model';
import { ConfigType } from '../../../../shared/models/config-type.model';
import { ThemeService } from '../../../../shared/services/theme.service';


@Component({
  selector: 'app-config-list-item',
  templateUrl: './config-list-item.component.html',
  styleUrls: ['./config-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigListItemComponent {
  @Input() config: ConfigMenuModel | null = null;
  @Input() configType: ConfigType = 'field';

  currentTheme$ = this.themeService.currentThemeClass$;
  Theme = ThemeEnum;

  constructor(private themeService: ThemeService) {}
}
