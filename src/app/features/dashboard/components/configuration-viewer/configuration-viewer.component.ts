import { Component, OnInit } from '@angular/core';

import { CONFIG } from '../../../../shared/mocks/form.mock';

@Component({
  selector: 'app-configuration-viewer',
  templateUrl: './configuration-viewer.component.html',
  styleUrls: ['./configuration-viewer.component.scss']
})
export class ConfigurationViewerComponent implements OnInit {
  CONFIG = CONFIG
  constructor() { }

  ngOnInit(): void {
  }

}
