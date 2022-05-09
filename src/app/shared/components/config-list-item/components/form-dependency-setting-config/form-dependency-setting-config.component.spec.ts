import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDependencySettingConfigComponent } from './form-dependency-setting-config.component';

describe('FormDependencySettingConfigComponent', () => {
  let component: FormDependencySettingConfigComponent;
  let fixture: ComponentFixture<FormDependencySettingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDependencySettingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDependencySettingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
