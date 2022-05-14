import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ThemeEnum } from '../enums/theme.enum';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentThemeClass$ = new BehaviorSubject<string>(ThemeEnum.Light);

  toggleTheme(): void {
    this.currentThemeClass$.next(
      this.currentThemeClass$.getValue() === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark
    );
  }
}
