import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contracts1 } from './contracts1';

describe('Contracts1', () => {
  let component: Contracts1;
  let fixture: ComponentFixture<Contracts1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contracts1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contracts1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
