import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

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
export class ConfigListItemComponent implements OnInit {
  @Input() config: ConfigMenuModel | null = null;
  @Input() configType: ConfigType = 'field';

  Theme = ThemeEnum;
  currentTheme$: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme$ = this.themeService.currentThemeClass$;
  }
}
