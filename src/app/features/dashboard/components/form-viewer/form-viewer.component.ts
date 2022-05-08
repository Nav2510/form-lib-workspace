import { Component, OnInit } from '@angular/core';

import { CONFIG } from '../../../../shared/mocks/form.mock';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit {
  CONFIG = CONFIG
  constructor() { }

  ngOnInit(): void {
  }

}
