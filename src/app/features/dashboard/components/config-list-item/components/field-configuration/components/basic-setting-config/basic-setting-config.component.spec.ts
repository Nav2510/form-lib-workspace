import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSettingConfigComponent } from './basic-setting-config.component';

describe('BasicSettingConfigComponent', () => {
  let component: BasicSettingConfigComponent;
  let fixture: ComponentFixture<BasicSettingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSettingConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSettingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
