import { Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'ngkdx-pokemon-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent {
  @Input() public moves: IPokemon.Move[];
}
