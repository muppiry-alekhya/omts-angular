import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMovieComponent } from './view-all-movie.component';

describe('ViewAllMovieComponent', () => {
  let component: ViewAllMovieComponent;
  let fixture: ComponentFixture<ViewAllMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
