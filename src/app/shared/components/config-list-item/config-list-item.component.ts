import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-list-item',
  templateUrl: './config-list-item.component.html',
  styleUrls: ['./config-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigListItemComponent {
  @Input() label: string = '';
  panelOpenState = false;
}
