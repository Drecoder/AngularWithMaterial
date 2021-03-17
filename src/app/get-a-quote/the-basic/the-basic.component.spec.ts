import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBasicComponent } from './the-basic.component';

describe('TheBasicComponent', () => {
  let component: TheBasicComponent;
  let fixture: ComponentFixture<TheBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
