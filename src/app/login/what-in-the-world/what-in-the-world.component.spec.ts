import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatInTheWorldComponent } from './what-in-the-world.component';

describe('WhatInTheWorldComponent', () => {
  let component: WhatInTheWorldComponent;
  let fixture: ComponentFixture<WhatInTheWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatInTheWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatInTheWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
