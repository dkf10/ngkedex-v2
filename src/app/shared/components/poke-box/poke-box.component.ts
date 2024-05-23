import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'ngkdx-poke-box',
  templateUrl: './poke-box.component.html',
  styleUrls: ['./poke-box.component.scss']
})
export class PokeBoxComponent {
  @Input() public pokemon: IPokemon.ListItem;
  @Input() public compactView: boolean = false;
  @Output() public clickEvent = new EventEmitter<IPokemon.ListItem>();
}
