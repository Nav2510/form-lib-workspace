import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ThemeEnum } from '../enums/theme.enum';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentThemeClass$ = new BehaviorSubject<string>('');

  constructor(private readonly storageService: StorageService) {
    this.currentThemeClass$.next(this.getStoredTheme());
  }

  toggleTheme(): void {
    this.currentThemeClass$.next(
      this.currentThemeClass$?.getValue() === ThemeEnum.Dark
        ? ThemeEnum.Light
        : ThemeEnum.Dark
    );
    this.storeTheme(this.currentThemeClass$?.getValue() ?? ThemeEnum.Light);
  }

  storeTheme(theme: string): void {
    this.storageService.setItem('theme', theme);
  }

  getStoredTheme(): string {
    const loadedTheme = this.storageService?.getItem('theme');
    return loadedTheme ? loadedTheme : ThemeEnum.Light;
  }
}
