import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencySettingConfigComponent } from './dependency-setting-config.component';

describe('DependencySettingConfigComponent', () => {
  let component: DependencySettingConfigComponent;
  let fixture: ComponentFixture<DependencySettingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencySettingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencySettingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
