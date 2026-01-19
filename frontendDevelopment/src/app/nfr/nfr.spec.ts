import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFR } from './nfr';

describe('NFR', () => {
  let component: NFR;
  let fixture: ComponentFixture<NFR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NFR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NFR);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
