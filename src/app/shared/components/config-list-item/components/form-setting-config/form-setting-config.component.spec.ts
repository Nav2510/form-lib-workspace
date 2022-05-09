import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSettingConfigComponent } from './form-setting-config.component';

describe('FormSettingConfigComponent', () => {
  let component: FormSettingConfigComponent;
  let fixture: ComponentFixture<FormSettingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSettingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSettingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
