import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModalComponent } from './pokemon-modal.component';

describe('PokemonModalComponent', () => {
  let component: PokemonModalComponent;
  let fixture: ComponentFixture<PokemonModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonModalComponent]
    });
    fixture = TestBed.createComponent(PokemonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
