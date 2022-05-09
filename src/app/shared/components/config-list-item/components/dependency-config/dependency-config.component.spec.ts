import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyConfigComponent } from './dependency-config.component';

describe('DependencyConfigComponent', () => {
  let component: DependencyConfigComponent;
  let fixture: ComponentFixture<DependencyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
