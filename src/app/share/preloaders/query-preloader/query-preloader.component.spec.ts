import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPreloaderComponent } from './query-preloader.component';

describe('QueryPreloaderComponent', () => {
  let component: QueryPreloaderComponent;
  let fixture: ComponentFixture<QueryPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
