import { Component } from '@angular/core';

import { ObjectMapperService } from '../../../../shared/services/object-mapper.service';

@Component({
  selector: 'app-configuration-viewer',
  templateUrl: './configuration-viewer.component.html',
  styleUrls: ['./configuration-viewer.component.scss'],
})
export class ConfigurationViewerComponent {
  config$ = this.mapperService.masterConfig$;

  constructor(private mapperService: ObjectMapperService) {}
}
