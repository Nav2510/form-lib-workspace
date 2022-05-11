import { Component } from '@angular/core';

import { ObjectMapperService } from '../../../../shared/services/object-mapper.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss'],
})
export class FormViewerComponent {
  config$ = this.mapperService.masterConfig$;

  constructor(private mapperService: ObjectMapperService) {}
}
