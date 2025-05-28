import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { PipesModule } from '../../pipes/pipes.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngkdx-poke-box',
  templateUrl: './poke-box.component.html',
  styleUrls: ['./poke-box.component.scss'],
  imports: [CommonModule, PipesModule],
  standalone: true
})
export class PokeBoxComponent {
  @Input() public pokemon: IPokemon.ListItem;
  @Input() public compactView: boolean = false;
  @Output() public clickEvent = new EventEmitter<IPokemon.ListItem>();
}
