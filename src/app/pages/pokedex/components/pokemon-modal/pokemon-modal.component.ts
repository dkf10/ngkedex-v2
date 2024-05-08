import { Component } from '@angular/core';

@Component({
  selector: 'ngkdx-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent {

  public isModalOpen: boolean = false;

  public openModal(): void {
    this.isModalOpen = true;
  }
}
