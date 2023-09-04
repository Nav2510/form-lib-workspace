import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LIB_VERSION } from '../../constants/version.constant';
import { ThemeEnum } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  githubLink = 'https://github.com/Nav2510/ngx-form-lib';
  npmLink = 'https://www.npmjs.com/package/ngx-form-lib';
  nightSrc = '../../../../assets/icons/moon.png';
  lightSrc = '../../../../assets/icons/sun.png';
  currentTheme$ = this.themeService.currentThemeClass$;
  LIGHT_THEME = ThemeEnum.Light;
  LIB_VERSION = LIB_VERSION;

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
