import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSettingConfigComponent } from './advance-setting-config.component';

describe('AdvanceSettingConfigComponent', () => {
  let component: AdvanceSettingConfigComponent;
  let fixture: ComponentFixture<AdvanceSettingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceSettingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceSettingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
