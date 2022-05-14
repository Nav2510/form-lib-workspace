import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ThemeEnum } from '../../enums/theme.enum';

import { ThemeService } from '../../services/theme.service';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnDestroy {
  currentTheme$ = this.theme.currentThemeClass$;
  destroy$ = new Subject<void>();

  constructor(
    private theme: ThemeService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.theme.currentThemeClass$.pipe(takeUntil(this.destroy$)).subscribe((theme) => {
      if (theme === ThemeEnum.Dark) {
        renderer.addClass(document.body, ThemeEnum.Dark);
        renderer.removeClass(document.body, ThemeEnum.Light);
        renderer.addClass(elementRef.nativeElement, ThemeEnum.Dark);
        renderer.removeClass(elementRef.nativeElement, ThemeEnum.Light);
      } else {
        renderer.addClass(document.body, ThemeEnum.Light);
        renderer.removeClass(document.body, ThemeEnum.Dark);
        renderer.addClass(elementRef.nativeElement, ThemeEnum.Light);
        renderer.removeClass(elementRef.nativeElement, ThemeEnum.Dark);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
