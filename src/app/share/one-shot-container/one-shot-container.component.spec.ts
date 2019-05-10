import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneShotContainerComponent } from './one-shot-container.component';

describe('OneShotContainerComponent', () => {
  let component: OneShotContainerComponent;
  let fixture: ComponentFixture<OneShotContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneShotContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneShotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
