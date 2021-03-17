import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryForYourselfComponent } from './try-for-yourself.component';

describe('TryForYourselfComponent', () => {
  let component: TryForYourselfComponent;
  let fixture: ComponentFixture<TryForYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryForYourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryForYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
