import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maioridade } from './idade';
import { beforeEach, describe, it, } from 'node:test';

describe('Maioridade', () => {
  let component: Maioridade;
  let fixture: ComponentFixture<Maioridade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maioridade],
    }).compileComponents();

    fixture = TestBed.createComponent(Maioridade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function expect(component: Maioridade) {
  throw new Error('Function not implemented.');
}

