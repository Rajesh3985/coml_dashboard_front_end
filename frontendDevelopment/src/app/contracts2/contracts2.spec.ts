import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contracts2 } from './contracts2';

describe('Contracts2', () => {
  let component: Contracts2;
  let fixture: ComponentFixture<Contracts2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contracts2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contracts2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
