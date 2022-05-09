import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSettingConfigComponent } from './section-setting-config.component';

describe('SectionSettingConfigComponent', () => {
  let component: SectionSettingConfigComponent;
  let fixture: ComponentFixture<SectionSettingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSettingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSettingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
