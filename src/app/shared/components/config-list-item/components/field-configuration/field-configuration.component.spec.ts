import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldConfigurationComponent } from './field-configuration.component';

describe('FieldConfigurationComponent', () => {
  let component: FieldConfigurationComponent;
  let fixture: ComponentFixture<FieldConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
