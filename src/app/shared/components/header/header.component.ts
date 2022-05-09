import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  githubLink = 'https://github.com/Nav2510/ngx-form-lib';
  npmLink = 'https://www.npmjs.com/package/ngx-form-lib';
}
