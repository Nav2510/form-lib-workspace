import { Component, OnInit } from '@angular/core';
import { SECTION_SETTING_CONFIG } from './section-setting-config.constant';

@Component({
  selector: 'app-section-setting-config',
  templateUrl: './section-setting-config.component.html',
  styleUrls: ['./section-setting-config.component.scss'],
})
export class SectionSettingConfigComponent implements OnInit {
  SECTION_SETTING_CONFIG = SECTION_SETTING_CONFIG;

  ngOnInit(): void {}
}
