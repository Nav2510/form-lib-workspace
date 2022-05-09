import { Component, OnInit } from '@angular/core';

import { ADVANCE_CONFIG } from './advance.constant';

@Component({
  selector: 'app-advance-config',
  templateUrl: './advance-config.component.html',
  styleUrls: ['./advance-config.component.scss'],
})
export class AdvanceConfigComponent implements OnInit {
  ADVANCE_CONFIG = ADVANCE_CONFIG;
  constructor() {}

  ngOnInit(): void {}
}
