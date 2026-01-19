import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uts } from './uts';

describe('Uts', () => {
  let component: Uts;
  let fixture: ComponentFixture<Uts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
