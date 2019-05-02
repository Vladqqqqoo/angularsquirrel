import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShotInfoComponent } from './new-shot-info.component';

describe('NewShotInfoComponent', () => {
  let component: NewShotInfoComponent;
  let fixture: ComponentFixture<NewShotInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShotInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShotInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
