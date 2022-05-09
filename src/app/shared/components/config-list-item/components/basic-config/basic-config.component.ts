import { Component, OnInit } from '@angular/core';

import { BASIC_CONFIG } from './basic.constant';

@Component({
  selector: 'app-basic-config',
  templateUrl: './basic-config.component.html',
  styleUrls: ['./basic-config.component.scss']
})
export class BasicConfigComponent implements OnInit {
  BASIC_CONFIG = BASIC_CONFIG;

  ngOnInit(): void {
  }

}
