import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceConfigComponent } from './advance-config.component';

describe('AdvanceConfigComponent', () => {
  let component: AdvanceConfigComponent;
  let fixture: ComponentFixture<AdvanceConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
