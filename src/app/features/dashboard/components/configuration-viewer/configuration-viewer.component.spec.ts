import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationViewerComponent } from './configuration-viewer.component';

describe('ConfigurationViewerComponent', () => {
  let component: ConfigurationViewerComponent;
  let fixture: ComponentFixture<ConfigurationViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
