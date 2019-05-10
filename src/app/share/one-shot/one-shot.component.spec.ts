import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneShotComponent } from './one-shot.component';

describe('OneShotComponent', () => {
  let component: OneShotComponent;
  let fixture: ComponentFixture<OneShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
